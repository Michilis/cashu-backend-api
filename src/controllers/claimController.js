const { claimLightning } = require('../services/claimService');

exports.claim = async(req, res) => {
    try {
        const { cashuToken, lightningAddress } = req.body;
        const addressToUse = lightningAddress || process.env.DEFAULT_LIGHTNING_ADDRESS;

        if (!cashuToken) {
            return res.status(400).json({ error: 'Cashu token is required.' });
        }

        if (!addressToUse) {
            return res.status(400).json({ error: 'Lightning address is required.' });
        }

        const result = await claimLightning(cashuToken, addressToUse);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error in claim:', error.message);
        res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
};