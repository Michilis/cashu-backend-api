const { CashuWallet, CashuMint } = require('cashu-ts');

const mintUrl = process.env.MINT_URL;
const wallet = new CashuWallet(new CashuMint(mintUrl));

exports.claimLightning = async(cashuToken, lightningAddress) => {
    try {
        const decodedToken = wallet.decodeToken(cashuToken);
        if (!decodedToken) {
            throw new Error('Invalid Cashu token.');
        }

        // Logic to claim the token and send to the Lightning address
        // This is a placeholder for the actual implementation
        const claimedAmount = decodedToken.proofs.reduce((sum, proof) => sum + proof.amount, 0);

        return {
            claimedAmount,
            lightningAddress,
            tokenInfo: {
                id: 'token12345',
                amount: claimedAmount,
                status: 'claimed'
            },
            preimage: 'random_preimage_hash'
        };
    } catch (error) {
        console.error('Error in claimLightning:', error.message);
        throw new Error('Failed to claim token.');
    }
};