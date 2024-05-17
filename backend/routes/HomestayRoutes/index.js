import express from "express";
import HomeStay from "../../db/models/HomestaySchema.js";
import Host from "../../db/models/HostSchema.js";
import checkToken from "../../middleware/checkToken.js";
import upload from "../image.js";

const router = express.Router();
//adding homestay
// Adding homestay with a specific host ID
router.post("/:hostId", async (req, res) => {
  try {
    const { hostId } = req.params;

    // Check if the host exists
    const hostExists = await Host.findById(hostId);
    if (!hostExists) {
      return res.status(404).json({ error: "Host not found" });
    }

    // Create a new homestay associated with the host
    const homestay = await HomeStay.create({ ...req.body, host: hostId });
    // Return the newly created homestay
    res.status(201).json(homestay);
  } catch (error) {
    console.error("Error creating homestay:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//list homestays
router.get("/", async (req, res) => {
  const home = await HomeStay.find();
  res.status(200).json(home);
});
//list host by homestay
router.get("/host/:id", async (req, res) => {
  const { id } = req.params;

  const homestays = await HomeStay.find({ host: id });
  return res.status(200).json(homestays);
});
//upload image
//upload image
router.post("/image/:homestayId", upload.array("file", 5), async (req, res) => {
  try {
    const { homestayId } = req.params; // Extract homestay ID from request parameters
    const fileUrls = req.files.map(file => {
      return { homestayId, url: `http://localhost:5000/${file.filename}` }; // Include homestayId with each URL
    });
    return res.json(fileUrls);
  } catch (error) {
    console.error("Error uploading images:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//get with id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const homestay = await HomeStay.findById(id);

    if (!homestay) {
      return res.status(404).json({ error: "Homestay not found" });
    }

    return res.status(200).json(homestay);
  } catch (error) {
    console.error("Error getting homestay:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body; // New data to update the homestay

    // Find the homestay by ID and update its data
    const homestay = await HomeStay.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!homestay) {
      return res.status(404).json({ error: "Homestay not found" });
    }

    return res.status(200).json(homestay); // Return the updated homestay
  } catch (error) {
    console.error("Error updating homestay:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHomestay = await HomeStay.findByIdAndDelete(id);
    if (!deletedHomestay) {
      return res.status(404).json({ error: "Homestay not found" });
    }
    return res.status(200).json({ message: "Homestay deleted successfully" });
  } catch (error) {
    console.error("Error deleting homestay:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
// Route to add multiple images to a homestay

router.get("/images/:homestayId", async (req, res) => {
  try {
    const { homestayId } = req.params; // Extract homestay ID from request parameters
    const homestay = await HomeStay.findById(homestayId);

    if (!homestay) {
      return res.status(404).json({ error: "Homestay not found" });
    }

    // Return only the images of the homestay
    const images = homestay.images;
    return res.status(200).json(images);
  } catch (error) {
    console.error("Error getting homestay images:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
