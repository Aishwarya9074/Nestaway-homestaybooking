import express from "express";
import Booking from "../../db/models/BookingSchema.js";
import Rooms from "../../db/models/RoomSchema.js";
import upload from "../image.js";

const router = express.Router();

// Route to book a homestay
router.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut, guests, location, rooms} = req.body;

    // Find an available room for the specified dates and homestay
    const room = await findAvailableRoom(id, checkIn, checkOut);

    // If no available room found, return an error
    if (!room) {
      return res.status(400).json({
        message: "No available room found for the specified dates.",
      });
    }

    // Create a new booking record
    const booking = await Booking.create({
      room: room._id,
      rooms,
      homestay: id,
      checkIn,
      checkOut,
      guests,
      location,
     
    });

    return res
      .status(201)
      .json({ message: "Booking created successfully.", booking });
  } catch (error) {
    console.error("Error while creating booking:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Function to find an available room for the specified dates and homestay
async function findAvailableRoom(homestayId, checkIn, checkOut) {
  try {
    const overlappingBookings = await Booking.find({
      homestay: homestayId,
      $or: [
        {
          checkIn: { $lt: new Date(checkOut) },
          checkOut: { $gt: new Date(checkIn) },
        },
        { checkIn: { $gte: new Date(checkIn), $lte: new Date(checkOut) } },
      ],
    });

    // Get all rooms for the homestay
    const rooms = await Rooms.find({ homestay: homestayId });

    // Filter out rooms that are not booked for the specified dates
    const availableRooms = rooms.filter(room => {
      return !overlappingBookings.some(
        booking => String(booking.room) === String(room._id)
      );
    });

    // Return the first available room, if any
    return availableRooms.length > 0 ? availableRooms[0] : null;
  } catch (error) {
    console.error("Error while finding available room:", error);
    return null;
  }
}

// Route to get the available room ID
router.post("/available-room/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut, guests } = req.body;

    // Find an available room for the specified dates and homestay
    const room = await findAvailableRoom(id, checkIn, checkOut);

    if (!room) {
      return res.status(400).json({
        message: "No available room found for the specified dates and guests.",
      });
    }

    return res.status(200).json({ roomId: room._id });
  } catch (error) {
    console.error("Error while finding available room:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find bookings for the specified homestay ID and populate the room details
    const bookings = await Booking.find({ homestay: id }).populate('room');

    // Return the bookings with populated room details
    return res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error while fetching bookings:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route to accept a booking
router.post("/accept/:bookingId", async (req, res) => {
  try {
    const { bookingId } = req.params;

    // Update the booking status to confirmed
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "confirmed" },
      { new: true }
    );

    // Return the updated booking
    return res.status(200).json({ booking });
  } catch (error) {
    console.error("Error while accepting booking:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Route to reject a booking
router.post("/reject/:bookingId", async (req, res) => {
  try {
    const { bookingId } = req.params;

    // Update the booking status to rejected
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "rejected" },
      { new: true }
    );

    // Return the updated booking
    return res.status(200).json({ booking });
  } catch (error) {
    console.error("Error while rejecting booking:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});
//add multple images
// router.post("/add-images/:homestayId", upload.array("images", 5), async (req, res) => {
//   try {
//     const { homestayId } = req.params; // Extract homestay ID from request parameters
//     const imageUrls = req.files.map(file => {
//       return { homestayId, url: `http://localhost:5000/${file.filename}` }; // Include homestayId with each URL
//     });
//     // Assuming HomeStay model has a field to store image URLs (e.g., images: [{ url: String }])
//     const homestay = await HomeStay.findById(homestayId);
//     homestay.images.push(...imageUrls); // Push new image URLs to the homestay's images array
//     await homestay.save(); // Save the updated homestay with new images
//     return res.json({ message: "Images uploaded successfully", images: imageUrls });
//   } catch (error) {
//     console.error("Error uploading images:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

export default router;
