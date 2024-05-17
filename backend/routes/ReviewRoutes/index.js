import express from "express";
import Review from "../../db/models/ReviewSchema.js";
import checkToken from "../../middleware/checkToken.js";
import Homestay from "../../db/models/HomestaySchema.js";

const router = express.Router();

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { reviewText } = req.body;
  const homestay = await Homestay.findById(id);
  if (!homestay) {
    return res.status(404).json({ messageL: "homestay not found" });
  }
  //create review
  const review = await Review.create({ homestay: id, reviewText });
  return res.status(201).json(review);
});
router.get("/", checkToken(["USER", "HOST"]), async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json(reviews);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await Review.find({ homestay: id });
  return res.status(200).json(review);
});
router.patch("/:id", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(id, body);
  return res.status(200).json(review);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndDelete(id);
  return res.status(403).json({ message: "review deleted", review });
});
export default router;
