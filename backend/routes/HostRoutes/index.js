import express from "express";
import Host from "../../db/models/HostSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  const host = await Host.findOne({ hostname: body.hostname });
  if (host) {
    return res.status(403).json({ message: "Hostname alraedy taken" });
  }
  if (body.hostpassword !== body.confirmPassword) {
    return res.status(403).json({ message: "password dont match" });
  }
  try {
    const hashedPassword = await bcrypt.hash(body.hostpassword, 10);
    body.hostpassword = hashedPassword;
    await Host.create(body);
    return res.status(201).json({ message: "signup is successfull" });
  } catch (e) {
    return res.status(403).json({ error: e.message });
  }
});
router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const host = await Host.findOne({ hostname: body.hostname });
  if (!host) {
    return res
      .status(403)
      .json({ message: "username or password is incorrect" });
  }
  const isMatching = await bcrypt.compare(body.hostpassword, host.hostpassword);
  if (!isMatching) {
    return res
      .status(403)

      .json({ message: "username or password is incorrect" });
  }
  // const secret_key="jkjlsdnmewmahjdhklkdlkhjkjedlieidjbnclllgshhdwjklkwlkdpokc"
  const token = jwt.sign(
    { role: "HOST", id: host._id },
    process.env.SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );
  return res.status(201).json({ message: "login successfully", token: token });
});
//find host by id
router.get("/profile/:id", async (req, res) => {
  const { id } = req.params;
  const host = await Host.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    {
      //populate the homestay
      $lookup: {
        from: "homestays",
        localField: "homestay",
        foreignField: "_id",
        as: "homestayDetails",
      },
    },
    {
      $project: {
        hostname: 1,
        image: 1,
        phonenumber: 1,
        homestayDetails: 1,
      },
    },
  ]);
  host.password = " ";
  return res.status(200).json(host);
});
router.patch("/:id", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const host = await Host.findByIdAndUpdate(id, body);
  return res.status(200).json(host);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const host = await Host.findByIdAndDelete(id);
  return res.status(403).json({ message: "host deleted" });
});

export default router;
