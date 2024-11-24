// https://leetcode.com/problems/longest-palindromic-substring/description/

/*
    We can also solve this using a 2-pointer method called as expand from center, check the 2 pointer section
    
    For DP, check this solution
    https://www.geeksforgeeks.org/longest-palindromic-substring/
    https://youtu.be/UflHuQj6MVA?si=ygPwH2L7vFD3BYoQ

    dp[i][j] is true iff str[i] === str[j] && dp[i+1][j-1] === true
    this property only holds true for strings of length >= 3,
    for strings of length 1 and 2, we have to manually fill the values
*/

export function longestPalindromicSubstring(str) {
    let n = str.length;
    // dp[i][j] tells if substring[i...j] is palindromic
    const dp = new Array(str.length).fill(0).map((r) => new Array(str.length).fill(false));

    // for strings with length === 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    let start = 0;
    let maxLen = 1;

    // for strings with length === 2
    for (let i = 0; i < n - 1; i++) {
        let j = i + 1;
        if (str[i] === str[j]) {
            maxLen = 2;
            start = i;
            dp[i][j] = true;
        }
    }

    // for strings with length >= 3 
    for (let k = 3; k <= n; k++) {
        for (let i = 0; i < n - k + 1; i++) {
            let j = i + k - 1;
            if (str[i] === str[j] && dp[i + 1][j - 1] === true) {
                dp[i][j] = true;
                if (k > maxLen) {
                    maxLen = k;
                    start = i;
                }
            }
        }
    }

    return str.slice(start, start + maxLen);
}