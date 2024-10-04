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