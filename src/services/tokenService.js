const { CashuWallet, CashuMint } = require('@cashu/cashu-ts');

const mintUrl = process.env.MINT_URL;
const wallet = new CashuWallet(new CashuMint(mintUrl));

// Validate Cashu token format
exports.checkTokenValidity = (cashuToken) => {
    try {
        const decodedToken = wallet.decodeToken(cashuToken);
        return !!decodedToken; // Return true if decoding succeeds
    } catch (error) {
        console.error('Invalid token format:', error.message);
        return false;
    }
};

// Check if a token has been spent
exports.checkTokenSpentStatus = async(cashuToken) => {
    try {
        const decodedToken = wallet.decodeToken(cashuToken);
        if (!decodedToken) {
            return { error: 'Invalid Cashu token.' };
        }

        const proofs = decodedToken.proofs;
        const spentStatus = await wallet.checkProofsSpent(proofs);

        const isSpent = spentStatus.some(proof => proof.spent);
        const totalAmount = proofs.reduce((sum, proof) => sum + proof.amount, 0);

        return { isSpent, amount: totalAmount };
    } catch (error) {
        console.error('Error in checkTokenSpentStatus:', error.message);
        return { error: 'Failed to check token status.' };
    }
};