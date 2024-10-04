import User from "../schema/User.js";
import bcrypt from 'bcrypt';
import 'dotenv/config'
import { formatDatatoSend } from "../utils/generates.js";
import { generateUsername } from "../utils/generates.js";




export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validation checks
    if (!email) {
      return res.status(400).json({ error: "Email is required" }); // Check if email is provided
    }

    if (firstName.length < 3) {
      return res.status(403).json({ error: "First Name must be at least 3 letters" });
    }

    if (lastName.length < 3) {
      return res.status(403).json({ error: "Last Name must be at least 3 letters" });
    }

    if (!emailRegex.test(email)) {
      return res.status(403).json({ error: "Email is invalid!!" });
    }

    if (!passwordRegex.test(password)) {
      return res.status(403).json({
        error: "Password should be 6 to 20 characters long with numeric, 1 lowercase, and 1 uppercase letter",
      });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" }); // 409 Conflict
    }

    // Hashing the password
    const hash_password = await bcrypt.hash(password, 10);

    // Generate a username
    const username = await generateUsername(email);

    // Create and save the user
    const user = new User({ firstName, lastName, email, password: hash_password, username });

    const savedUser = await user.save();
    return res.status(200).json(formatDatatoSend(savedUser));

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

  
const Login = async (req, res) => {
    let { email, password,  } = req.body;
    await User.findOne({ "email": email })
        .then((user) => {
            if (!user){
                    return res.status(403).json({"error":"Email not found"})
            }
            if (!user.google_auth) {
                bcrypt.compare(password, user.password,
                    async (err, result) => {
                        if (err) {
                            return res.status(403).json({"error":"Error occured while login please try again!"})
                        }
                        if (!result) {
                            return res.status(403).json({"error":"Incorrect password"})
                        }
                        else {                    
                            await user.save();
                            return res.status(200).json(formatDatatoSend(user));
                        }
                })
            } else {
                return res.status(403).json({"error":"account was created with google try log in with google"})
            }
        })
        .catch(err => {
        return res.status(500).json({"error":err.message})
    })
}

      
const getMyProfile = async (req, res) => {
    try {
      const userId = req.user;
      const user = await User.findById(userId)
      .select("lastName firstName email address username wallet escrow_wallet profile_img  -_id")
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Error while getting the profile" });
    }
  };
  
  const updateProfile = async (req, res) => {
    try {
      // Ensure that req.user contains a valid user ID
      const userId = req.user; // Assuming req.user contains the authenticated user's ID
  
      console.log('User ID:', userId); // Debugging check to see if userId is correct
  
      // Destructure incoming fields from the request body
      const { firstName, lastName, email, username, address, profile_img } = req.body;
  
      // Prepare the fields that need to be updated (without optional chaining)
      const updatedFields = {
        firstName,
        lastName,
        email,
        username,
        profile_img,
      };
  
      // Update address fields only if they exist in the request body
      if (address) {
        updatedFields.address = {
          street: address.street || '',
          city: address.city || '',
          state: address.state || '',
          postalCode: address.postalCode || '',
          country: address.country || '',
        };
      }
  
      // Use findByIdAndUpdate with $set for safe updates and return the updated user
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: updatedFields },
        { new: true, runValidators: true }
      );
  
      // If user is not found, return a 404
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Successfully updated the profile
      res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating profile:', error); // Log the error for debugging
      res.status(500).json({ message: 'Server error', error });
    }
  };
  


const deleteUser = async (req, res) => {
    try {
        // Check if the logged-in user has the role 'superadmin'
        if (req.role !== 'superadmin') {
            return res.status(403).json({ message: 'You are not authorized to delete this account.' });
        }
        // Get the user ID from the request parameters
        const userId = req.params.id;
        // Find the user by ID and delete
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ message: 'User account deleted successfully.' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user.' });
    }
};

const activateUser = async (req, res) => {
    try {
        // Ensure `req.role` is set correctly by your middleware or authentication logic
        // if (req.role !== 'superadmin') {
        //     return res.status(403).json({ message: 'You are not authorized to activate this account.' });
        // }

        const userId = req.params.id;
        const user = await User.findById(userId);

        if (user) {
            // Set the role to 'paidUser'
            user.role = 'paidUser';
            await user.save();
            return res.status(200).json({ message: 'User activated successfully.' });
        } else {
            // If user not found, return 404
            return res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        console.error('Error activating user:', error);
        return res.status(500).json({ message: 'Error activating user.' });
    }
};




const getProfile = async (req, res) =>{
    let { username } = req.body;
      User.findOne({ "username": username })
      .select("-password -google_auth -updatedAt -blogs")
          .then(user => {
          return res.status(200).json(user)
          console.log(user)
          })
          .catch(err => {
          return res.status(500).json({error:err.message})
      })
}


export const searchUsers = async (req, res) =>{
    let { query } = req.body;

    User.find({ "username": new RegExp(query, 'i') })
    .limit(50)
    .select("lastName firstName username profile_img -_id")
    .then(users => {
            return res.status(200).json({ users })
        })
        .catch(err => {
            return res.status(500).json({ error: err.message })
        })
  


}

 const getUserIdByEmail = async (req, res) => {
  try {
    const { email } = req.body; // Get email from request body
    const user = await User.findOne({ email }); // Find user by email

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      userId: user._id // Return user ID
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving user ID',
      error: error.message
    });
  }
};

export {
    Register,
    Login,
    getUserIdByEmail,
    getMyProfile,
    deleteUser, 
    updateProfile,
    activateUser,
    getProfile
}