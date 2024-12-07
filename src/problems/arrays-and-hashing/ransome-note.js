// https://leetcode.com/problems/ransom-note/

export function ransomeNote(r, m) {
    // store the freq of chars in magzine in a hash
    const mHash = {};
    for (let i = 0; i < m.length; i++) {
        mHash[m[i]] = (mHash[m[i]] ?? 0) + 1;
    }
    // now, traverse the string
    for (let i = 0; i < r.length; i++) {
        const char = r[i];
        if (mHash[char] === undefined || mHash[char] <= 0) return false;
        mHash[char]--;
    }
    return true;
}