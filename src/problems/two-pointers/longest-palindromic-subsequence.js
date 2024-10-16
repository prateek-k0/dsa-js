/*
    longest palidromic substring
    https://leetcode.com/problems/longest-palindromic-substring/description/

    Given a string s, return the longest palindromic substring in s.

    This solution uses a 2 pointer method known as "expand from center" to check if a substring is palincdromic or not
*/

// expand from center algorithm
function checkValidPalindrome(str, l, r) {
    while(l >= 0 && r < str.length && str[l] === str[r]) {
        // to pointers
        l--;
        r++;
    }
    return str.slice(l+1, r);
}

export function longestPalindrome(str) {
    let maxString = '';
    for(let i = 0; i < str.length; i++) {
        const oddLengthString = checkValidPalindrome(str, i, i);
        const evenLengthString = checkValidPalindrome(str, i, i+1);
        const currMaxString = oddLengthString.length > evenLengthString.length ? oddLengthString : evenLengthString;
        maxString = maxString.length < currMaxString.length ? currMaxString : maxString;
    }
    return maxString;
}