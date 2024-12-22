// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

export function bestTimeToBuyStocks3(prices) {
    const dp = new Array(prices.length).fill(0)
        .map((r) => ({ true: [-1, -1], false: [-1, -1]}));
    const memoize = (index, bought, transactions) => {
        if(transactions === 2) return 0;
        if(index === prices.length) return 0;
        if(dp[index][bought][transactions] !== -1) return dp[index][bought][transactions];
        // else
        let res = 0;
        if(bought === true) {
            // skip the day - HODL
            let skip = memoize(index + 1, bought, transactions);
            // or sell
            let sellNow = prices[index] + memoize(index + 1, false, transactions + 1);
            res = Math.max(skip, sellNow);
        } else {
            // skip - buy later
            let buyLater = memoize(index + 1, bought, transactions);
            // or buy now
            let buyNow = memoize(index + 1, true, transactions) - prices[index];
            res = Math.max(buyLater, buyNow);
        }
        dp[index][bought][transactions] = res;
        return res;
    }
    return memoize(0, false, 0);
}