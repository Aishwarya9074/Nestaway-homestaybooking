import express from "express";
import Rooms from "../../db/models/RoomSchema.js";

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { homestayId, rooms } = req.body;

    // Ensure homestayId is provided
    if (!homestayId) {
      return res.status(400).json({ message: "Homestay ID is required" });
    }

    // Ensure rooms data is provided
    if (!rooms || !Array.isArray(rooms) || rooms.length === 0) {
      return res.status(400).json({ message: "Invalid rooms data provided" });
    }

    // Add homestayId to each room object and format room data
    const formattedRooms = rooms.map(room => ({
      homestay: homestayId,
      name: room.name,
      description: room.description,
      roomNo: room.roomNo,
      capacity: room.capacity,
      price: room.price,
      amenities: room.amenities,
    }));

    // Insert the rooms into the database
    const createdRooms = await Rooms.insertMany(formattedRooms);

    res
      .status(201)
      .json({ message: "Rooms added successfully", rooms: createdRooms });
  } catch (error) {
    console.error("Error adding rooms:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  const rooms = await Rooms.find();
  res.status(200).json(rooms);
});
//list room by host--userRoutes


router.patch("/:id", async (req, res) => {
  const { roomId } = req.params;
  const updatedData = req.body;

  const room = await Rooms.findByIdAndUpdate({
    roomId,
    updatedData,
    new: true,
  });
  res.status(200).json(room);
});
router.delete("/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findByIdAndDelete(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
