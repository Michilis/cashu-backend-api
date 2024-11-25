const { CashuWallet, CashuMint, getEncodedToken } = require('@cashu/cashu-ts');

const mintUrl = process.env.MINT_URL;
const wallet = new CashuWallet(new CashuMint(mintUrl));

exports.claimLightning = async(cashuToken, lightningAddress) => {
    try {
        const { proofs } = await wallet.meltTokens(cashuToken);

        if (!proofs) {
            throw new Error('Invalid Cashu token.');
        }

        const claimedAmount = proofs.reduce((sum, proof) => sum + proof.amount, 0);

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
        console.error('Error in claimLightning:', JSON.stringify(error, null, 2));
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        throw new Error(`Failed to claim token: ${error.message || 'Unknown error'}`);
    }
};