// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/

/*
    We can use top down dp for this
    for memoization, we use a 2d dp array
    dp = [{}, {}, {},...], n times
    dp[i] = { true: 0, false: 0 }, true / false indicate whether or not 
    we are buying a stock at i'th day.

    for a day i, if we have already bought a stock - we have 2 choices:
        1. sell it the next day
        2. cooldown
    if we have not bought, we can either:
        1. buy some stock
        2. cooldown
*/

export function bestTimeToBuyStocksCooldown(prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map((r) => ({}));
    const memoize = (index, canBuyMore) => {
        if (index >= n) return 0;    // for last day
        // if already memoized, return it
        if(dp[index][canBuyMore] !== undefined) return dp[index][canBuyMore];
        // in both buying and not-buying case, we have a cooldown period; calculate it
        const cooldown = memoize(index + 1, canBuyMore);
        // now, check if we have a buying state or a not-buying state
        if (canBuyMore === true) {
            const bought = memoize(index + 1, false) - prices[index];
            dp[index][canBuyMore] = Math.max(cooldown, bought);
        } else {
            const sold = memoize(index + 2, true) + prices[index];  // jumping by 2, since there's cooldown on selling
            dp[index][canBuyMore] = Math.max(cooldown, sold);
        }
        return dp[index][canBuyMore];
    }
    // console.log(dp);
    return memoize(0, true);
}