function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    const freeToken = 500;

    if (tokensUsed > freeToken) {
        const extraToken = tokensUsed - freeToken;
        let extraTokenGroup = Math.floor(extraToken / 100);
        let totalCharge = extraTokenGroup * 5;
        return totalCharge;
    } else if (tokensUsed <= 500) {
        return 0;
    }
}

console.log(calculateAiCost(600));
