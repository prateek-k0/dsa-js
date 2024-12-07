// https://leetcode.com/problems/is-subsequence

export function isSubsequence(s, t) {
    const dp = new Array(s.length + 1).fill().map((r) => new Array(t.length + 1).fill(undefined));
    const memoize = (i1, i2) => {
        // if we reached the end of s, means we have completed finding all chars of s in t
        if(i1 === s.length) return true;
        // if we have reached end of t, it means we can't find all chars of s in t
        else if(i2 === t.length) return false;
        // if already memoized
        if(dp[i1][i2] !== undefined) return dp[i1][i2];
        let ans = false;
        // if they are equal
        if(s[i1] === t[i2]) {
            ans = memoize(i1 + 1, i2 + 1);
        } else {    // else, try skipping the character in t
            ans = memoize(i1, i2 + 1);
        }
        dp[i1][i2] = ans;
        return dp[i1][i2];
    }
    return memoize(0, 0);
};