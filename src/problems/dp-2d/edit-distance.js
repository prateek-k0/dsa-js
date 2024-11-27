// https://leetcode.com/problems/edit-distance/description/

/*
    Theoretically similar to LCS
    dp[i][j] stores edit distances from [i...m-1] of string 1 to convert to [j...n-1] of string 2

*/

export function editDistance(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    // base case : empty strings
    if(m === 0) return n;
    if(n === 0) return m;
    const dp = new Array(m + 1).fill(0).map((r) => new Array(n + 1).fill(-1));
    const memoize = (i, j) => {
        // if first string is reached at the end, add extra chars at the end
        if(i === m) return n - j;
        // if last strng is reached at the end, remove extra chars from the end
        if(j === n) return m - i;
        // if already memoized
        if(dp[i][j] !== -1) return dp[i][j];
        // else, check char by char
        let result = 0;
        if(s1[i] === s2[j]) {   // if both chars are equal, no extra op is required
            result = memoize(i+1, j+1);
        } else {
            // else, we can either remove the char, or replace it with other char, or add a new char
            const removal = 1 + memoize(i+1, j);
            const replacement = 1 + memoize(i+1, j+1);
            const insertion = 1 + memoize(i, j+1);
            result = Math.min(removal, replacement, insertion);
        }
        dp[i][j] = result;
        return dp[i][j];
    }
    return memoize(0, 0);
}