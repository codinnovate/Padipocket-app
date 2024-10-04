import express, { Router } from "express";
import { createEscrow, acceptEscrow, completeEscrow, getEscrows ,markAsDelivered } from '../controllers/Escrow.js';
import { verifyJWT } from "../middlewares/VerifyJwt.js";

export const  escrowRouter = express.Router();
// Create a new Escrow
escrowRouter.post('/escrow', verifyJWT, createEscrow)
            .post('/escrows/', verifyJWT, getEscrows)
            .put('/escrow/:escrowId/accept', verifyJWT, acceptEscrow)
            .post('/escrow/:escrowId/complete', verifyJWT, completeEscrow)
            .put('/escrow/:escrowId/delivered',  markAsDelivered)

