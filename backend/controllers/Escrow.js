const Escrow = require('../models/Escrow');
const User = require('../models/User');

// Create an Escrow
export const createEscrow = async (req, res) => {
  try {
    const { secondParty, role, description, needsDispatch, amount, timeCompletion, timeUnit } = req.body;

    const newEscrow = new Escrow({
      creator: req.user._id,
      secondParty,
      role,
      description,
      needsDispatch,
      amount,
      timeCompletion,
      timeUnit
    });

    await newEscrow.save();
    
    // Send invite link to secondParty's email (code to send email here)
    
    res.status(201).json({ escrow: newEscrow });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Accept Escrow Terms
export const acceptEscrow = async (req, res) => {
  try {
    const { escrowId } = req.params;

    const escrow = await Escrow.findById(escrowId);

    if (!escrow) {
      return res.status(404).json({ message: 'Escrow not found' });
    }

    escrow.status = 'processing';
    escrow.escrowWalletBalance = escrow.amount; // Move amount to locked escrow wallet
    await escrow.save();

    res.status(200).json({ escrow });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Complete Escrow (Time or Buyer Confirms Receipt)
export const completeEscrow = async (req, res) => {
  try {
    const { escrowId } = req.params;

    const escrow = await Escrow.findById(escrowId);

    if (!escrow) {
      return res.status(404).json({ message: 'Escrow not found' });
    }

    if (escrow.status !== 'processing') {
      return res.status(400).json({ message: 'Escrow is not in processing state' });
    }

    escrow.status = 'completed';
    escrow.escrowSellerBalance = escrow.amount; // Transfer to seller
    escrow.escrowWalletBalance = 0; // Clear locked balance
    await escrow.save();

    res.status(200).json({ escrow });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
