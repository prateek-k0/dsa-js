// https://leetcode.com/problems/coin-change-ii/description/

// similar approach to coin-change, bottom-up approach

export function coinChange2(coins, amount) {
    const dp = new Array(amount + 1).fill(0);
    // base, for 0 amount, we can consider no coins, hence there is 1 way
    dp[0] = 1;
    // for other amounts,
    for(const coin of coins) {
        for(let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
}