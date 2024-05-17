import { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
  hostId:{
    type:Schema.Types.ObjectId,
    ref:"Host"
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["debitcard", "creditcard", "paypal", "stripe", "other"],
    required: true,
  },
  transactionId: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  metadata: {
    type: Schema.Types.Mixed,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Payment = model("Payment", PaymentSchema);
export default Payment;
