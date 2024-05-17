import { Schema, model } from "mongoose";

const AdminSchema = new Schema ({
  adminname: {
    type: String,
    required: true,
    unique: true,
  },
  homestay: [
    {
      type: Schema.Types.ObjectId,
      ref: "HomeStay",
    },
  ],

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "admin",
  },
});
const Admin = model("Admin", AdminSchema);
export default Admin;
