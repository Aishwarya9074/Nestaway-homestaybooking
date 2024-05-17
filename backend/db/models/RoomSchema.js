import { Schema, model } from "mongoose";

const RoomSchema = Schema({
  homestay:{
    type: Schema.Types.ObjectId,
    ref:'Homestay'

  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  roomNo: {
    type: Number,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  booked: {
    type: Boolean,
    default:true
  
  },
});
const Rooms = model("Rooms", RoomSchema);
export default Rooms;
