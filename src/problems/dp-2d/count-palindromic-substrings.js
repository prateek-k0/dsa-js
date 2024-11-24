// https://leetcode.com/problems/longest-palindromic-substring/description/

/*
    Similar to longest palindromic substrings
*/

export function countPalindromicSubstrings(str) {
    let n = str.length;
    // dp[i][j] tells if substring[i...j] is palindromic
    const dp = new Array(str.length).fill(0).map((r) => new Array(str.length).fill(false));

    // for strings with length 1 and 2
    for(let i = 0; i < n; i++) {
        dp[i][i] = true;
        let j = i+1;
        if(j < n && str[i] === str[j]) {
            dp[i][j] = true
        }
    }

    // for length 3 and above
    for(let k = 3; k <= n; k++) {
        for(let i = 0; i < n - k + 1; i++) {
            let j = i + k - 1;
            if (str[i] === str[j] && dp[i + 1][j - 1] === true) {
                dp[i][j] = true;
            }
        }
    }

    // check if dp[i][j] is true, if yes, increment count
    let count = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(dp[i][j] === true) count++;
        }
    }
    return count;
}