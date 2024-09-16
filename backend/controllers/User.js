import User from "../schema/User.js";
import bcrypt from 'bcrypt';
import 'dotenv/config'
import { formatDatatoSend } from "../utils/generates.js";
import { generateUsername } from "../utils/generates.js";




export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

const Register = async (req, res) => {
    let { firstName,lastName,  email, password } = req.body;
    if (firstName.length < 3){
        return res.status(403).json({"error":"First Name must be at least 3 letters "})
    }
    if (lastName.length < 3){
        return res.status(403).json({"error":"Last Name must be at least 3 letters "})
    }
    if (!emailRegex.test(email)) {
        return res.status(403).json({
            "error":"Email is invalid!!"
        })
    }
    if (!passwordRegex.test(password)){
        return res
            .status(403)
            .json({
            "error":"Password should be 6 to 20 characters long with  numberic, 1 lowercase and 1 uppercase letters "})
    }
    bcrypt.hash(password, 10, async(err, hash_password) => {
        let username = await generateUsername(email);
        let user = new User({firstName, lastName, email, password:hash_password , username,  })
        user.save().then((u) => {
            return res.status(200).json(formatDatatoSend(u))
        })
        .catch(err => {
            //     if (err.code == 11000) {
            //     return res.status(500).json({"error":"Email already exists"})
            // }
            console.error(err)
            return res.status(500).json({"error":err.message})
        })})
}
const Login = (req, res) => {
    let { email, password,  } = req.body;
    User.findOne({ "email": email })
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
      .select("lastName firstName username wallet profile_img  -_id")
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Error while getting the profile" });
    }
  };
  

// async function updateUsers() {
//     try {
//       const users = await User.find({ role: { $exists: false } }); // Find users without the role field
//       for (let user of users) {
//         user.role = 'user'; // Set default role for existing users
//         await user.save(); // Save updated user document
//       }
  
//       console.log('Users updated successfully.');
//     } catch (error) {
//       console.error('Error updating users:', error);
//     } finally {
//     }
//   }
  


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


// const getAllContacts = async (req, res) => {
//     try {
//         // Fetch only the lastName firstName and phone number of users excluding roles "admin" and "superadmin"
//         const users = await User.find({
//             role: "user"
//         }
//         )
//         .select("phoneNumber lastName firstName -_id"); // Exclude the _id field from the result

//         // Extract lastName firstName and phone numbers into an array of formatted strings
//         const contacts = users.map(user => `${user.phoneNumber}`);

//         // Join the contacts with a newline character
//         // const contactsString = contacts.join(',\n');

//         // Send response as JSON with newline-separated contacts
//         contacts.forEach(contact => console.log(contact));
//         console.log(contacts.length);
//     } catch (error) {
//         console.error("Error fetching contacts:", error);
//         // return res.status(500).json("An error occurred");
//     }
// }

// getAllContacts()



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
export {
    Register,Login, getMyProfile,deleteUser,activateUser, getProfile
}