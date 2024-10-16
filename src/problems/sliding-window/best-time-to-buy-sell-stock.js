/*
    best time to buy and sell stock, without cooldown
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    for this, we have 2 solutions: 
    1. use suffix max, iterate over each element and check for max profit when sold on the day of suffix max, max = Math.max(max, suffixMax[i] - prices[i])
    2. using sliding window, for the left end, if the price is greater than the current day, decrease the window size by increasing the left window index;
*/

// sliding window
export function bestTimeToBuyAndSell(prices = []) {
    let maxProfit = 0;
    let l = 0;  // left end of the window
    for(let r = l; r < prices.length; r++) {    // right end of the window
        while(l < r && prices[l] > prices[r]) l++;  // decrease window size from left if price[l] > price[r]
        maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
    }
    return maxProfit;
}

// suffix max
export function suffixMaxBestTimeToBuyAndSell(prices = []) {
    const suffixMax = new Array(prices.length).fill(-1);
    let maxProfit = 0;
    for(let i = prices.length - 2; i >= 0; i--) {   // store suffix max for each element
        suffixMax[i] = Math.max(suffixMax[i+1], prices[i+1]);
    }
    for(let i = 0; i < prices.length; i++) {    // iterate over each element with i
        // the profit, if bought on ith day, will be largest if bought on suffixMax[i]th day
        // profit = suffixMax[i] - prices[i];
        maxProfit = Math.max(maxProfit, suffixMax[i] - prices[i]);
    }
    return maxProfit
}