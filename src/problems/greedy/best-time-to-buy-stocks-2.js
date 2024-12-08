// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

/*
    Greedy solution - local maxima leads to global maxima
    We simply compare 2 consecutive days [i and i+1], if the price of previous day is smaller than 
    the next day's price, add to the profit.

    This works, because if there is another day that has prices greater than i+1, (lets call it i+k),
    then we can simply add profits from that too, rather than holding out and not selling on i+1,
    since prices[i+k] - prices[i] === (prices[i+1] - prices[i]) + (prices[i+k] - prices[i+1]);
    associative property of addition
*/

export function bestTimeToBuyStocks2(prices) {
    let profits = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            profits += (prices[i] - prices[i-1]);
        }
    }
    return profits;
}