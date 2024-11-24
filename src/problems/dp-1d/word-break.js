// https://leetcode.com/problems/word-break

/*
    Bottom-up DP solution

    Approach: 
    - define a boolean DP array with length = n+1;
    - dp[i] represents whether the substring from 0 to index i
    can be segmented into words from wordDict.
    - Initialize dp[0] = true as a base case, meaning for 0 length substrings, we can always 
    have them segmente

    - iterate from the front, with i = [1...s.length]
    - at any point, for every word in wordDict, s.slice(i - word.length, i) === word
    ie, a substring till the current index i === word, then
    set dp[i] = dp[i - word.length], meaning, if the slice after s[i - word.length...i] 
    can be segmented (ie, one of the previous string slice can be segmented), 
    then dp[i] can also be segmented, else false
*/

export function wordBreakBottomUp(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    // starting condition, 0 length segments can always be segmented
    dp[0] = true;
    for(let i = 1; i <= s.length; i++) {
        for(const word of wordDict) {
            // see if a slice until now === word
            if((i - word.length) >= 0 && s.slice(i - word.length, i) === word) {
                dp[i] = dp[i - word.length];
            }
            // if a match is found, dont look for other words
            if(dp[i] === true) break;
        }
    }
    return dp[s.length];
}

/*
    In Place of using s.slice, we can also use tries for more efficient comparisons
*/