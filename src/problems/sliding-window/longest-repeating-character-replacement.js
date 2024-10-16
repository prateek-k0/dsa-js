/*  
    Longest Repeating Character Replacement
    https://leetcode.com/problems/longest-repeating-character-replacement/description/
    
    // in every window, check if the sum of frequencies of all characters, except the most repeating one, is less than or equal to k, if not, shrink window from left
*/

export function longestRepeatingReplacement(str = '', k = 0) {
    const getCharCode = (char) => char.charCodeAt(0) - 65;
    const freqArray = new Array(26).fill(0);
    const getFrequencyArrayRepeatingLength = () => {    // returns the sum of frequencies of all chars that are not repeating the most times
        const maxFreq = Math.max(...freqArray);
        const sum = freqArray.reduce((a, c) => a + c);
        return sum - maxFreq;
    }
    let l = 0;
    let maxLen = 1;
    for(let r = 0; r < str.length; r++) {
        const rightCharCode = getCharCode(str[r]);
        freqArray[rightCharCode]++;
        while(l < r && getFrequencyArrayRepeatingLength() > k) {
            const leftCharCode = getCharCode(str[l]);
            freqArray[leftCharCode]--;
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
}