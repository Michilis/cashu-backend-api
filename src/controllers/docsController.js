exports.getDocs = (req, res) => {
    const apiDocs = {
        overview: "The Cashu-Lightning-Claim API provides endpoints for validating and checking the status of Cashu tokens.",
        endpoints: [{
                method: "GET",
                path: "/api/token/validate",
                description: "Validates the format of a Cashu token.",
                queryParameters: ["cashuToken=ENCODED_CASHU_TOKEN"],
                responses: {
                    success: { isValid: true },
                    errors: {
                        400: "Invalid or missing token.",
                        500: "Internal server error."
                    }
                }
            },
            {
                method: "GET",
                path: "/api/token/status",
                description: "Checks whether a Cashu token has been spent and its total amount.",
                queryParameters: ["cashuToken=ENCODED_CASHU_TOKEN"],
                responses: {
                    success: { isSpent: false, amount: 1000 },
                    errors: {
                        400: "Invalid or missing token.",
                        500: "Internal server error."
                    }
                }
            },
            {
                method: "POST",
                path: "/api/claim",
                description: "Claims a Cashu token and converts it into a Lightning payment.",
                requestBody: {
                    cashuToken: "ENCODED_CASHU_TOKEN",
                    lightningAddress: "user@lightning.network"
                },
                responses: {
                    success: {
                        claimedAmount: 1000,
                        lightningAddress: "user@lightning.network",
                        tokenInfo: {
                            id: "token12345",
                            amount: 1000,
                            status: "claimed"
                        },
                        preimage: "random_preimage_hash"
                    },
                    errors: {
                        400: "Cashu token or Lightning address is required.",
                        500: "Internal server error."
                    }
                }
            }
        ]
    };

    res.json(apiDocs);
};