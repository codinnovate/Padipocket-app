import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import User from './schema/User.js';
import cors from 'cors';
import { verifyJWT } from './middlewares/VerifyJwt.js';
import { uploadUrl } from './controllers/uploads.js';
import { userRouter } from './routes/User.js';
import { paymentRouter } from './routes/Payments.js'
import { escrowRouter } from './routes/Escrow.js';



export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
const app = express();

app.use(cors());
app.use(express.json());
app.use("", [userRouter, escrowRouter]);
app.use("/transactions", paymentRouter)
app.get('/get-upload-url', uploadUrl);
app.get('/active', (req, res) => res.status(200).json("server running"));
app.get("/users/", verifyJWT, (req, res) => {
try {
      const loggedInUserId = req.user;
      User.find({ _id: { $ne: loggedInUserId } })
      .select("-password -google_auth -updatedAt -blogs")
      .then((users) => {
          res.status(200).json(users);
        })
        .catch((error) => {
          console.log("Error: ", error);
          res.status(500).json("errror");
        });
    } catch (error) {
      res.status(500).json({ message: "error getting the users" });
    }
  });
// get only me
  app.get("/me/:userId", (req, res) => {
    try {
      const loggedInUserId = req.params.userId;
      User.findById(loggedInUserId)
        .then((user) => {
          if (user) {
            res.status(200).json(user);
          } else {
            res.status(404).json({ message: "User not found" });
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
          res.status(500).json({ message: "Error fetching the user" });
        });
    } catch (error) {
      res.status(500).json({ message: "Error getting the user" });
    }
  });












  

  const run = async () => {
    await mongoose.connect(process.env.DB_LOCATION, {
      autoIndex: true,
  });
  console.log("Connected to myDB");

  }
  run()
  .catch((err) => console.error(err))
app.listen(process.env.PORT, () => {
    console.log("listening on port -> http://localhost:" + process.env.PORT)
})