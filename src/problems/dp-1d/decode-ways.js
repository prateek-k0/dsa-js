// https://leetcode.com/problems/decode-ways/description/

/*
    we could store a 1-d dp array for this.
    dp[i] === to store ways for string with i chars strong.

    for every iteration,
    check the previous and previous 2 characters. if both are valid, add 1 for each
*/

export function decodeWays(str) {
    // error condition:
    if(str[0] === '0') return 0;
    const dp = new Array(str.length + 1).fill(0);
    // base condition, for string with no chars
    dp[0] = 1;
    // for string with length 1:
    dp[1] = 1;
    for(let i = 2; i <= str.length; i++) {
        const prev1 = Number(str[i-1]); // number with last 1 digit
        const prev2 = Number(str[i-2]) * 10 + Number(str[i-1]);  // number with last 2 digits
        if(prev1 > 0) dp[i] += dp[i-1]; // if prev1 is valid
        if(10 <= prev2 && prev2 <= 26)  dp[i] += dp[i-2]; // if prev2 is valid
    }
    return dp[str.length];
}