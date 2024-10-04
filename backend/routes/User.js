import { Router } from "express";
import { Register, Login, getMyProfile, deleteUser,updateProfile, activateUser, getProfile, getUserIdByEmail } from "../controllers/User.js";
import { verifyJWT } from "../middlewares/VerifyJwt.js";
import { fundWallet } from "../controllers/Wallet.js";

export const userRouter = Router();


userRouter.post("/signup", Register)
           .post("/fund-wallet",verifyJWT, fundWallet)
          .post("/signin", Login)
          .get('/profile',   verifyJWT, getMyProfile)
          .delete('/user/delete/:id', verifyJWT, deleteUser)
          .put('/user/activate/:id', activateUser)
          .post('/get-profile', getProfile)
          .put('/profile', verifyJWT, updateProfile)
          .post('/getUserIdByEmail', getUserIdByEmail)
