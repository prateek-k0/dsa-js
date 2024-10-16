/*
    Permutation in string

    Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
    In other words, return true if one of s1's permutations is the substring of s2.

    https://leetcode.com/problems/permutation-in-string/description/

    we can use a fixed length sliding window for this
*/
function validateIfSameFrequency(f1, f2) {
    // checks the freq of each char, if equal, return true, else false
    for(let i = 0; i < f1.length; i++) {
        if(f1[i] !== f2[i]) return false;
    }
    return true;
}

export function permutationInString(str1, str2) {
    if(str1.length > str2.length) return false; 
    // check if str1's permutation is present in str2
    // first, we calculate freq hash of str1
    const getCharCode = (char = '') => char.charCodeAt(0) - 97; // only for lowercase
    const freqHash1 = new Array(26).fill(0);
    for(let i = 0; i < str1.length; i++) {
        freqHash1[getCharCode(str1[i])]++;
    }
    //next, we create a window of same size as str1.length; store charachters of that len from str2 in new freq hash
    const freqHash2 = new Array(26).fill(0);
    for(let i = 0; i < str1.length; i++) {
        freqHash2[getCharCode(str2[i])]++;
    }
    // for first window
    if(validateIfSameFrequency(freqHash1, freqHash2) === true) return true;
    freqHash2[getCharCode(str2[0])]--;
    // use sliding window to see if it contains permutation
    for(let l = 1, r = str1.length; r < str2.length; l++, r++) {
        // add char from right
        freqHash2[getCharCode(str2[r])]++;
        if(validateIfSameFrequency(freqHash1, freqHash2) === true) return true;
        // remove characters from left
        freqHash2[getCharCode(str2[l])]--;
    }
    return false;
}