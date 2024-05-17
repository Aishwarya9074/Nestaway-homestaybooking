import { Schema, model } from "mongoose";

const BookingSchema = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: "Rooms",
    required: true,
  },
  homestay: {
    type: Schema.Types.ObjectId,
    ref: "Homestay",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: "Host",
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required:true,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = model("Booking", BookingSchema);
export default Booking;
