// https://leetcode.com/problems/coin-change/description/

/*
    We can solve using either top down or bottom up dp
*/

/*
    Bottom up dp solution:
    first we sort the coins, only then we'd be able to perfectly calculate the min number
    for every coin, we tabulate from the coin to amount, and store the min bumber of ways with
    each coin to the amount
*/

export function coinChangeBottomUp(coins, amount) {
    // sort coins first
    coins.sort((a, b) => a - b);
    // to store the number of ways for each amount
    const dp = new Array(amount + 1).fill(Infinity);
    // for 0 amount
    dp[0] = 0;
    // for other amounts, iterate from [coin...amount] for each coin
    for(const coin of coins) {
        for(let i = coin; i <= amount; i++) {
            // amount with the coin included, 1 + dp[amount - i];
            const am = 1 + dp[i - coin];
            // while, the count without including this coin is dp[i];
            // the min number of ways is simply the minimum of the above 2
            dp[i] = Math.min(dp[i], am);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

/*
    Top down dp solution
    for each possible amount from [0...target], we make 2 calls:
    1. with including current coin
    2. excluding current coin.
    dp[currentCoin][amount] = Math.min(1 + including, excluding);
*/

export function coinChangeTopDown(coins, amount) {
    const dp = new Array(coins.length).fill(0).map((r) => new Array(amount + 1).fill(-1));
    function tabulate(currentAmount, coinIndex) {
        if(currentAmount === 0) return 0; // No more coins required
        if(currentAmount < 0) return Infinity;   // exceeded target
        if(coinIndex >= coins.length) return Infinity;  // cant make target
        if(dp[coinIndex][currentAmount] !== -1) return dp[coinIndex][currentAmount];    // if already stored
        // else, try including or excluding the coin
        const include = 1 + tabulate(currentAmount - coins[coinIndex], coinIndex);
        const exclude = tabulate(currentAmount, coinIndex+1);
        dp[coinIndex][currentAmount] = Math.min(include, exclude);
        return dp[coinIndex][currentAmount];
    }
    const res = tabulate(amount, 0);
    console.log(dp);
    return res === Infinity ? -1 : res;
}