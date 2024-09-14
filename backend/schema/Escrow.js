const mongoose = require('mongoose');
const { Schema } = mongoose;

const escrowSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the escrow
  secondParty: { type: String, required: true }, // Email of the second party (buyer/seller)
  role: { type: String, enum: ['buyer', 'seller'], required: true }, // 'buyer' or 'seller'
  description: { type: String, required: true },
  needsDispatch: { type: Boolean, default: false }, // If courier dispatch is required
  amount: { type: Number, required: true }, // Escrow amount
  timeCompletion: { type: Number, required: true }, // Time in hours or days
  timeUnit: { type: String, enum: ['days', 'hours'], required: true }, // Time unit for timeCompletion
  status: { type: String, enum: ['created', 'processing', 'completed', 'cancelled'], default: 'created' },
  createdAt: { type: Date, default: Date.now },
  escrowWalletBalance: { type: Number, default: 0 }, // Locked balance when transaction starts
  escrowSellerBalance: { type: Number, default: 0 }, // Balance to be released to seller
});

module.exports = mongoose.model('Escrow', escrowSchema);

export default mongoose.model("escrows", escrowSchema);