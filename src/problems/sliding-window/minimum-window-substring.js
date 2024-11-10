/*
    minimum window substring

    https://leetcode.com/problems/minimum-window-substring/description/

    we can simply use 2 pointer approach for this
*/

export function minimumWindowSubstring(s, t) {
    const tFreqHash = new Array(128).fill(0);   // to store the freq of string t, 128 to accomodate both upper and lower case chars
    const sFreqHash = new Array(128).fill(0);   // to store the freq of string s;
    const getCharCode = (char = '') => char.charCodeAt(0);
    const validateHash = () => {
        // see if t is present in the freqArray of s
        for(let i = 0; i < tFreqHash.length; i++) {
            if(tFreqHash[i] > sFreqHash[i]) return false;
        }
        return true;
    }
    // calculate freq hash of string t
    for(let i = 0; i < t.length; i++) {
        tFreqHash[getCharCode(t[i])]++;
    }
    let minimumStart = 0;
    let minimumSize = 1e9;
    let found = false;
    let l = 0;
    for(let r = 0; r < s.length; r++) { // sliding window
        sFreqHash[getCharCode(s[r])]++;
        while(l <= r && validateHash() === true) {  // if validated, shrink window from left
            if(r - l + 1 < minimumSize) {   // check if current window is minimum;
                minimumSize = r - l + 1;
                minimumStart = l;
                found = true;
            }
            sFreqHash[getCharCode(s[l])]--;
            l++;
        }
    }
    return found === true ? s.slice(minimumStart, minimumStart + minimumSize) : '';
}