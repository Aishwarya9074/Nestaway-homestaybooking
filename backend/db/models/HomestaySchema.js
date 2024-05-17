import { Schema, model } from "mongoose";

const HomestaySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: [String],
  image: [{ type: String }],
  host: {
    type: Schema.Types.ObjectId,
    ref: "Host",
  },
});

const HomeStay = model("HomeStay", HomestaySchema);

export default HomeStay;
