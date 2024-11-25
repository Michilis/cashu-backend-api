const express = require('express');
const { validateToken, getTokenStatus } = require('../controllers/tokenController');
const { CashuWallet, CashuMint } = require('@cashu/cashu-ts');

const router = express.Router();

// GET /api/token/validate
router.get('/validate', validateToken);

// GET /api/token/status
router.get('/status', getTokenStatus);

module.exports = router;