import mongoose, { Schema }  from 'mongoose'


const escrowSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // User who created the escrow
  secondParty: { type: String, required: true }, // Email of the second party (buyer/seller)
  description: { type: String, required: true },
  needsDispatch: { type: Boolean, default: false }, // If courier dispatch is required
  amount: { type: Number, required: true }, // Escrow amount
  status: { type: String, enum: ['created', 'processing', 'completed', 'cancelled'], default: 'created' },
  createdAt: { type: Date, default: Date.now },
});



const PickupSchema = new Schema({
  locationCode: { type: String},
  address: { type: String, required: true },
  pickupName: { type: String, required: true },
  pickupNumber: { type: String, required: true },
  altPickupNumber: { type: String },
  pickupDate: { type: Date, required: true },
  note: { type: String },
});

const DropSchema = new Schema({
  locationCode: { type: String, },
  address: { type: String, required: true },
  recipientName: { type: String, required: true },
  recipientNumber: { type: String, required: true },
  altRecipientNumber: { type: String },
});

const DeliverySchema = new Schema({
  orderType: { type: String, default: 'FULFILLMENT' }, // e.g., "FULFILLMENT"
  pickup: PickupSchema, // Embed the PickupSchema
  drops: [DropSchema], // Array of drops (in case of multiple delivery points)
  status: { type: String, default: 'pending' }, // e.g., "pending", "in-transit", "completed"
  createdAt: { type: Date, default: Date.now },
});

export const Delivery = mongoose.model('Delivery', DeliverySchema);
export default mongoose.model("escrows", escrowSchema);
