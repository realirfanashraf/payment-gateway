import { Schema, model } from 'mongoose';

const paymentSchema = new Schema({
  paymentId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true, enum: ['Pending', 'Completed', 'Failed'] },
  method: { type: String, required: true, enum: ['CreditCard', 'DebitCard', 'DigitalWallet'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Payment = model('Payment', paymentSchema);
