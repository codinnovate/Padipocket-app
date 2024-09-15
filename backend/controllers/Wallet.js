import User from "../schema/User.js";
export const fundWallet = async (req, res) => {
    try {
        // Assuming the user is authenticated and you get their id
        const userId = req.user;
        const { amount } = req.body; // Amount being added to the wallet

        // Find the user by id
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Parse amount to make sure it's a number
        const amountToAdd = Number(amount);

        if (isNaN(amountToAdd) || amountToAdd <= 0) {
            return res.status(400).json({ message: 'Invalid amount' });
        }

        // Update wallet balance
        user.wallet += amountToAdd;

        // Save updated user
        await user.save();

        res.status(200).json({ message: 'Wallet funded successfully', wallet: user.wallet });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

