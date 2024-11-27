// https://leetcode.com/problems/regular-expression-matching/description/

/*
    RegEx Pattern matching
    dp[i][j] stores string from [i...m] matching pattern [j...n]

    if s[i] === p[j] || p[j] === '.', then look for i+1, j+1,
    else, if, p[j+1] === '*', then:
        1. we can either skip the next char in pattern (j = j + 2)
        2. or, we can move to next char in the string (i = i+1)
*/

export function matchRegEx(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = new Array(m+1).fill(undefined).map((r) => new Array(n+1).fill(undefined));
    const memoize = (i, j) => {
        // if pattern's end is reached, see if string's end is also reached
        if(j === n) return i === m;
        // if already memoized, return it
        if(dp[i][j] !== undefined) return dp[i][j];
        // else, try matching chars
        // add i < m, else might be out of bounds for the array
        const charMatches = i < m && (s[i] === p[j] || p[j] === '.');
        // see if next char is a '*':
        if(j < n-1 && p[j+1] === '*') {
            dp[i][j] = memoize(i, j+2) || (charMatches && memoize(i+1, j));
        } else {
            dp[i][j] = charMatches && dfs(i+1, j+1);
        }
        return dp[i][j];
    }
    return memoize(0, 0);
}