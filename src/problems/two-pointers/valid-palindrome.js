/*
    Valid Palindrome

    https://leetcode.com/problems/valid-palindrome/

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.
*/

export function validPalindrome(str = '') {
    // remove non alphanumeric characters and convert to lower case
    const validString = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    for(let i = 0; i < validString.length / 2; i++) {   // i from start to mid, check if string[i] === string[end-i]
        if(validString[i] !== validString[validString.length - 1 - i]) return false;
    }
    return true;
}