// https://leetcode.com/problems/interleaving-string/description/

/*
    We have a dp state with 2 vars:
    i : current index of 1st string
    j : current index of 2nd string

    we also have k, which shows the current index for target string (basically, k = i + j)
    at any point, we have to check if either s1[i] === s3[k], or s2[j] === s3[k];
    if they are, increment either i or j, and look for other approaches.
    else, if neither is same, return false
*/

export function interleaveString(s1, s2, s3) {
    // base error condition
    if(s1.length + s2.length !== s3.length) return false;
    const dp = new Array(s1.length + 1).fill(0).map((r) => new Array(s2.length + 1).fill(undefined));
    const memoize = (i, j, k) => {
        // if reached end, then its always true
        if(k === s3.length) return true;
        // if a result is already memoized, return it
        if(dp[i][j] !== undefined) return dp[i][j];
        // now, chek if either s1[i] === s3[k], or s2[j] === s3[k]
        let result = false;
        if(i < s1.length && s1[i] === s3[k]) {
            result ||= memoize(i+1, j, k+1);
        }
        // OPTIMIZATION: only go inside if previous result is false
        if(result === false && j < s2.length && s2[j] === s3[k]) {  
            result ||= memoize(i, j+1, k+1);
        }
        dp[i][j] = result;
        return dp[i][j];
    }
    return memoize(0, 0, 0);
}