import Escrow from '../schema/Escrow.js';
import User from '../schema/User.js';

import nodemailer from 'nodemailer';

export const createEscrow = async (req, res) => {
  try {
    const { secondParty, role, description, needsDispatch, amount } = req.body;
    const creator = req.user;

    const newEscrow = new Escrow({
      creator,
      secondParty,
      description,
      needsDispatch,
      amount,
      role
    });

    await newEscrow.save();
    res.status(201).json({ newEscrow });
    console.log(newEscrow);
    const escrow_id = newEscrow._id
    const desc = newEscrow.description;
    const creatorFirstName = newEscrow.creator.firstName;
    const creatorLastName = newEscrow.creator.lastName;

    // Send invite link to secondParty's email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      service: 'gmail',
      auth: {
        user: 'padipocket@gmail.com', // Replace with your email
        pass: 'lgbusgkvizwfkjre', // Replace with your email password
      },
    });

    const mailOptions = {
      from: 'Padipocket App',
      to: secondParty,
      subject: `INVITE LINK TO Join A Transaction on Padipocket`,
      html: `<!doctype html>
              <html>
              <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body>
              <main>
              <h2 class="mt-6 text-gray-700 dark:text-gray-200">Hi,</h2>
              <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                  <h1>You have been invited  to accept a secure transaction agreement on Padipocket</h1>
                  <p>Here is the description of the transaction agreement : ${desc}</p>
                  <h2>Here is the link to get started on your account https://padipocket.vercel.app/auth/register/</h2>
              </p>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                  Thanks, <br>
                  PadiPocket Team
              </p>
              </main>
              </body>
              </html>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email: ', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
  }
};



export const acceptEscrow = async (req, res) => {
  try {
    const { escrowId } = req.params;
    const buyerId = req.user; // Get the buyer's id from the request context

    const escrow = await Escrow.findById(escrowId);
    if (!escrow) {
      return res.status(404).json({ message: 'Escrow not found' });
    }

    // Update escrow status to processing
    const updatedEscrow = await Escrow.findByIdAndUpdate(
      escrowId,
      {
        status: 'processing', // Change status to processing
      },
      { new: true } // Return the updated document
    );

    // Optionally, add the amount to the buyer's escrow_wallet
    await User.findByIdAndUpdate(
      buyerId,
      {
        $inc: { escrow_wallet: escrow.amount }, // Add amount to buyer's escrow_wallet
      },
      { new: true } // Return the updated document
    );

    res.status(200).json({ message: 'Escrow accepted and status updated to processing', escrow: updatedEscrow });
  } catch (error) {
    console.error('Error accepting escrow:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const markAsDelivered = async (req, res) => {
  try {
    const { escrowId } = req.params;  // Get escrowId from request parameters

    // Find the escrow transaction by its ID
    const escrow = await Escrow.findById(escrowId);
    if (!escrow) {
      return res.status(404).json({ message: 'Escrow transaction not found' });
    }
    const updatedEscrow = await Escrow.findByIdAndUpdate(
      escrowId,
      {
        status: 'delivered', // Change status to processing
      },
      { new: true } // Return the updated document
    );


    res.status(200).json({ message: 'Escrow status updated to delivered', updatedEscrow });
  } catch (error) {
    console.error('Error updating escrow status to delivered:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
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



    escrow.status = 'processing';
    escrow.escrowSellerBalance = escrow.amount; // Transfer to seller
    escrow.escrowWalletBalance = 0; // Clear locked balance
    await escrow.save();

    res.status(200).json({ escrow });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


export const getEscrows = async (req, res) => {
  try {
    const { email } = req.body; // Get the second party email from the request body
    const userId = req.user; // Get the logged-in user's ID

    // Find all escrows where the user is either the creator or the second party
    const escrows = await Escrow.find({
      $or: [
        { creator: userId }, // User is the creator
        { secondParty: email } // The provided email is the second party
      ]
    })
    .populate('creator');

    // If no escrows are found, return a not found error
    if (!escrows.length) {
      return res.status(404).json({ message: 'No escrows found' });
    }

    // Return the list of escrows
    res.status(200).json({escrows});
  } catch (error) {
    // Handle any server error
    console.error(error)
    res.status(500).json({ message: 'Server error', error });
  }
};

