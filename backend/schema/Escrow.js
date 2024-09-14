import mongoose, { Schema }  from 'mongoose'

const escrowSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the escrow
  secondParty: { type: String, required: true }, // Email of the second party (buyer/seller)
  role: { type: String, enum: ['buyer', 'seller'], required: true }, // 'buyer' or 'seller'
  description: { type: String, required: true },
  needsDispatch: { type: Boolean, default: false }, // If courier dispatch is required
  amount: { type: Number, required: true }, // Escrow amount
  status: { type: String, enum: ['created', 'processing', 'completed', 'cancelled'], default: 'created' },
  createdAt: { type: Date, default: Date.now },
  escrowWalletBalance: { type: Number, default: 0 }, // Locked balance when transaction starts
  escrowSellerBalance: { type: Number, default: 0 }, // Balance to be released to seller
});


export default mongoose.model("escrows", escrowSchema);