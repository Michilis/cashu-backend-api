const express = require('express');
const { claim } = require('../controllers/claimController');

const router = express.Router();

/**
 * POST /api/claim
 * Route for claiming a Cashu token and converting it into a Lightning payment.
 * Request body:
 *  {
 *      "cashuToken": "ENCODED_CASHU_TOKEN",
 *      "lightningAddress": "user@lightning.network"
 *  }
 * Response:
 *  {
 *      "claimedAmount": 1000,
 *      "lightningAddress": "user@lightning.network",
 *      "tokenInfo": {
 *          "id": "token12345",
 *          "amount": 1000,
 *          "status": "claimed"
 *      },
 *      "preimage": "random_preimage_hash"
 *  }
 */
router.post('/', claim);

module.exports = router;