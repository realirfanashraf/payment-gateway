import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
  transactionId: { type: String, required: true, unique: true },
  paymentId: { type: String, required: true },
  status: { type: String, required: true, enum: ['Initiated', 'Processing', 'Completed', 'Failed', 'Refunded'] },
  error: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Transaction = model('Transaction', transactionSchema);
