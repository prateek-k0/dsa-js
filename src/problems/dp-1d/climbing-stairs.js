// https://leetcode.com/problems/climbing-stairs/description/

/*
    similar to fibonacci
    at each step i, we can take 1 more step to reach i+1, or take 2 steps to reach i+2

    So, ways to reach i, w[i] = w[i-1] + w[i-2];
    w[0] = 1;
    w[1] = 1;
*/

export function climbingStairs(n) {
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i < n+1; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}