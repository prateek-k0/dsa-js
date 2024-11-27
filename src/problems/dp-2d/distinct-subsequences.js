// https://leetcode.com/problems/distinct-subsequences/

/*
    Similar to LCS
    if s[i] === t[j], we have 2 possibilities:
    1. check for i+1 and j+1
    2. check for i+1 and j

    else if s[i] !== t[j], we only have 1 possibility
    1. check for i+1 and j
*/

export function distinctSubsequences(s, t) {
    let m = s.length;
    let n = t.length;
    // base error case
    if(m < n) return 0;
    const dp = new Array(m+1).fill(0).map((r) => new Array(n+1).fill(-1));
    const memoize = (i, j) => {
        // if reached the end of target string, then we have found an answer
        if(j === n) return 1;
        // if reached the end of source string, but not the target string, we didnt reach an answer
        if(i === m) return 0;
        // if already memoized
        if(dp[i][j] !== -1) return dp[i][j];
        let res = 0;
        // else, compare current chars
        if(s[i] === t[j]) {
            res += memoize(i + 1, j + 1);
            res += memoize(i + 1, j);
        } else {
            res += memoize(i + 1, j);
        }
        dp[i][j] = res;
        return dp[i][j];
    }
    return memoize(0, 0);
}