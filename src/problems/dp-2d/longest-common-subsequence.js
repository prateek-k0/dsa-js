// https://leetcode.com/problems/longest-common-subsequence/description/

/*
    Very important DP problem

    We use a 2d dp structure for this:
    for 2 strings a and b
    dp[i][j] stores lcs from 0 to ith char in string a, and for 0 to j-th char in string b
*/

export function longestCommonSubsequence(a, b) {
    const m = a.length;
    const n = b.length;
    // edge case, for faster comparison
    if(a === b) return m;
    // create 2d memo array
    const dp = new Array(m).fill(0).map((r) => new Array(n).fill(-1));
    const memoize = (i, j) => {
        // base case, can't go any further
        if(i === m || j === n) return 0;
        // if already memoized, return it
        if(dp[i][j] !== -1) return dp[i][j];
        // to calculate substring from current pos of i (for string a) and j (for string b)
        let commonSubLen = 0;
        if(a[i] === b[j]) { // if both chars are equal, increment both indices
            commonSubLen = 1 + memoize(i + 1, j + 1);
        } else {    // else, try incrmenting one at a time
            commonSubLen = Math.max(memoize(i + 1, j), memoize(i, j + 1));
        }
        dp[i][j] = commonSubLen;
        return dp[i][j];
    }
    return memoize(0, 0);
}