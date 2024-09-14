import { Router } from "express";
import { Register, Login, getMyProfile, deleteUser, activateUser, getProfile } from "../controllers/User.js";
import { verifyJWT } from "../middlewares/VerifyJwt.js";

export const userRouter = Router();

userRouter.post("/signup", Register)
          .post("/signin", Login)
          .get('/profile',   verifyJWT, getMyProfile)
          .delete('/user/delete/:id', verifyJWT, deleteUser)
          .post('/get-profile', getProfile)
