/*
    Longest Substring Without Repeating Characters
    https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

    we can use 2 pointer approach for this:
    1. add char from right and increase its frequency in the freqArray
    2. until freqArray[right] > 1 (multiple chars), decrease window from left
    3. look for max window size in each iteration (window size = r - l + 1);

*/

export function longestNonRepeatingSubstring(str) {
    const freqArray = new Array(65536).fill(0); // stores the frequency of all chars in string, utf-8 chars
    let maxSize = 1;
    let l = 0;
    for(let r = 0; r < str.length; r++) {
        const rightChar = str[r].charCodeAt(0);
        freqArray[rightChar]++;
        while(l < r && freqArray[rightChar] > 1) {
            const leftChar = str[l].charCodeAt(0);
            freqArray[leftChar]--;
            l++;
        }
        maxSize = Math.max(maxSize, r - l + 1);
    }
    return maxSize;
}