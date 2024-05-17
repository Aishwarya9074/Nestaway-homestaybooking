import express from 'express'
import Profile from '../../db/models/ProfileSchema.js'

const router=express.Router()
router.get('/:userId',async(req,res)=>{
    const {userId}=req.params
    const userProfile=await Profile.findOne({user:userId})
    if(!userProfile){
        return res.status(404).json({message:'profile not found'})
    }
    return res.status(200).json(userProfile)
})

export default  router;