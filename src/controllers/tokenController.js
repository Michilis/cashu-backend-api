const { checkTokenValidity, checkTokenSpentStatus } = require('../services/tokenService');
const { CashuWallet, CashuMint } = require('@cashu/cashu-ts');

exports.validateToken = async(req, res) => {
    try {
        const { cashuToken } = req.query;

        if (!cashuToken) {
            return res.status(400).json({ error: 'Cashu token is required.' });
        }

        const isValid = checkTokenValidity(cashuToken);
        if (!isValid) {
            return res.status(400).json({ error: 'Invalid Cashu token.' });
        }

        res.json({ isValid: true });
    } catch (error) {
        console.error('Error in validateToken:', error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

exports.getTokenStatus = async(req, res) => {
    try {
        const { cashuToken } = req.query;

        if (!cashuToken) {
            return res.status(400).json({ error: 'Cashu token is required.' });
        }

        const status = await checkTokenSpentStatus(cashuToken);
        if (status.error) {
            return res.status(400).json({ error: status.error });
        }

        res.json({
            isSpent: status.isSpent,
            amount: status.amount,
        });
    } catch (error) {
        console.error('Error in getTokenStatus:', error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
};