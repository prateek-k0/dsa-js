// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

export function bestTimeToBuyStocks2(prices) {
    const dp = new Array(prices.length).fill().map((r) => ({ true: undefined, false: undefined }));
    const memoize = (index, bought) => {
        if(index === prices.length) return 0;
        if(dp[index][bought] !== undefined) return dp[index][bought];
        
        if(bought === true) { // if already bought, sell now or later
            let sellNow = prices[index] + memoize(index + 1, false);
            let sellLater = memoize(index + 1, bought);
            dp[index][bought] = Math.max(sellNow, sellLater);
        } else { // if not already bought, buy now or buy later
            let buyNow = memoize(index + 1, true) - prices[index];
            let buyLater = memoize(index + 1, bought);  // notice buyLater is equivalent to sellLater
            dp[index][bought] = Math.max(buyNow, buyLater);
        }

        return dp[index][bought]
    }
    return memoize(0, false);
}