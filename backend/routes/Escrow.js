const express = require('express');
const { createEscrow, acceptEscrow, completeEscrow } = require('../controllers/escrowController');
const router = express.Router();
const auth = require('../middleware/auth'); // Authentication middleware

// Create a new Escrow
router.post('/escrow', auth, createEscrow);

// Accept Escrow (Second party confirms terms)
router.post('/escrow/:escrowId/accept', auth, acceptEscrow);

// Complete Escrow (After time or buyer confirms receipt)
router.post('/escrow/:escrowId/complete', auth, completeEscrow);

module.exports = router;
