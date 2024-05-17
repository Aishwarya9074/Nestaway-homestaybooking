import express from "express";
import User from "../../db/models/Userschema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Host from "../../db/models/HostSchema.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ username: body.username });
  if (user) {
    return res.status(403).json({ message: "username alraedy taken" });
  }
  if (body.userpassword !== body.confirmPassword) {
    return res.status(403).json({ message: "password dont match" });
  }
  try {
    const hashedPassword = await bcrypt.hash(body.userpassword, 10);
    body.userpassword = hashedPassword;
    await User.create(body);
    return res.status(201).json({ message: "signup is successfull" });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
});
router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const users = await User.findOne({ username: body.username });
  if (!users) {
    return res.status(403).json({ message: "username or password incorrect" });
  }
  const isMatching = await bcrypt.compare(
    body.userpassword,
    users.userpassword
  );
  if (!isMatching) {
    return res.status(403).json({ message: "username or password incorrect" });
  }
  //  const secret_key='cdsjhkejlldofijeksjfnhghdkcgsjjaskdkasjdkjbasjdkasdjisadklj'
  const token = jwt.sign(
    { role: "USER", id: users._id },
    process.env.SECRET_KEY,
    {
      expiresIn: "10d",
    }
  );
  return res.status(201).json({ message: "login successfully", token: token });
});

//list host by homestay
router.get('/host/:id',async(req,res)=>{
  const {id}=req.params

  const homestay=await Host.find({homestay:id})
  return res.status(200).json(homestay)
})

router.patch("/:id", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, body);
  return res.status(200).json(user);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  return res.status(403).json({ message: "user deleted" });
});

export default router;
