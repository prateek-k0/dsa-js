// https://leetcode.com/problems/longest-valid-parentheses/description/

/*
    Solution: https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/

    we can use 1-d dp for this
    for memoization, we use an array upto n+1 elements
    where, each element, (dp[i]) stores the length of longest valid parentheses substring 
    ending at index i
    so we have 2 scenarios:
        - if str[i] === '(', we cannot form a valid substring from str[0...i], ignore
        - if str[i] === ')', check its previous char 
            - if previous char is '(', then dp[i] = dp[i-2] + 2 (provided dp[i-2] is valid)
            - else, check if the substring before it forms a valid subsring
            substring before i is str[0...(i - dp[i-1] - 1)]; 
            if str[i - dp[i-1]] === '(', then dp[]
        at each iteration, keep count of max len
*/

export function longestValidParenthesesSubstrings(str) {
    const n = str.length;
    const dp = new Array(n).fill(0);
    let maxLen = -1;
    for(let i = 1; i < n; i++) {
        if(str[i] === '(') continue;
        else {
            if(str[i] === ')') {
                if(str[i-1] === '(') {
                    dp[i] = (i >= 2) ? (dp[i-2] + 2) : 2;
                } else {
                    // Check if the previous character is a closing
                    // parenthesis ')' and the matching opening
                    // parenthesis exists before the valid substring
                    if(i - dp[i-1] > 0 && str[i - dp[i-1] - 1] === '(') {
                        // subtract - 2, since we are excluding the current chars
                        const prevValidSubstringLen = dp[i - dp[i-1] - 2];
                        dp[i] = dp[i-1] + (i - dp[i-1] >= 2 ? prevValidSubstringLen : 0) + 2;
                    }
                }
                maxLen = Math.max(maxLen, dp[i]);
            }
        }
    }
    return maxLen;
}
