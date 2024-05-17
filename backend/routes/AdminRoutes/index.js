import express from "express";
import bcrypt from 'bcrypt';
import Admin from "../../db/models/AdminSchema.js";
import jwt from 'jsonwebtoken'
import checkToken from "../../middleware/checkToken.js";
import Host from "../../db/models/HostSchema.js";

const router = express.Router();

router.post('/signup',async(req,res)=>{
    const body={...req.body}

    const admin=await Admin.findOne({adminname:body.adminname})
    if(admin){
        return res.status(403).json({message:"adminname already taken"})

    }
    if(body.password !== body.confirmPassword){
        return res.status(403).json({message:'password dont match'})
    }
    try{
        const hashedPassword=await bcrypt.hash(body.password,10);
        body.password=hashedPassword;
        await Admin.create(body)
        return res.status(201).json({message:'signup is succeffully'})
    }
    catch(e){
        return res.status(403).json({error:e.message})
    }

})
router.post('/login',async(req,res)=>{
    const body={...req.body}
    const admin=await Admin.findOne({adminname:body.adminname})
    if(!admin){
        return res.status(403).json({message:'adminname pasword is incorrect'})

    }
    const isMatching=await bcrypt.compare(body.password,admin.password)
    if(!isMatching){
        return res.status(403).json({message:'adminname or password is incorrect'})

    }
    const token=jwt.sign(
        {role:"ADMIN",id:admin._id},
        process.env.SECRET_KEY,
        {
            expiresIn:"7d"
        }
    )
    return res.status(201).json({message:"login sucessfull",token:token})
})
router.get("/hosts",checkToken("ADMIN"),async(req,res)=>{
    try{
        const hosts=await Host.find({},{password:0}).populate('homestay')
        return res.status(200).json({hosts})
    }
    catch(error){
        return res.status(403).json({message:"Internal server error"})
    }

})
//get with hostid

router.get("/hosts/:id",checkToken("ADMIN"),async(req,res)=>{
    try{
        const {id}=req.params
        const host=await Host.findById(id,{password:0})
        
        if(!host){
            return res.status(403).json({message:'host not found'})
        }
        return res.status(200).json({host})
    }
    catch(error){
        return res.status(500).json({message:'Internal server error'})
    }

})
router.patch("/hosts/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const updatedField=req.body
        const updatedHost=await Host.findByIdAndUpdate(id,updatedField,{new:true})
        if(!updatedHost){
            return res.status(404).json({message:'host not found'})
        }
        return res.status(200).json({host:updatedHost})
    }
    catch(error){
        return res.status(500).json({mesaage:"Internal server error"})

    }

})
router.delete("/hosts/:id",async(req,res)=>{
    try {
        const { id } = req.params;
    
        // Find the host user in the database and delete it
        const deletedHost = await Host.findByIdAndDelete(id);
    
        if (!deletedHost) {
          return res.status(404).json({ message: 'Host user not found' });
        }
    
        // Return a success message in the response
        return res.status(200).json({ message: 'Host user deleted successfully' });
      } catch (error) {
        console.error('Error deleting host user:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
})

export default router;
