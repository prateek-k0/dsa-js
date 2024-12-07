// https://leetcode.com/problems/isomorphic-strings/

export function isomorphicStrings(s, t) {
    const sHash = {};
    const tHash = {};
    // the idea is to replace each char in s with corresponding char in t
    // vice versa for chars in t
    for (let i = 0; i < s.length; i++) {
        // check if there is already a char assigned to s[i]
        // if there is, see if its a different char
        if (sHash[s[i]] !== undefined && sHash[s[i]] !== t[i]) return false;
        // same for chars in t
        if (tHash[t[i]] !== undefined && tHash[t[i]] !== s[i]) return false;
        // else, assign t[i] to s[i];
        sHash[s[i]] = t[i];
        // assign s[i] to t[i]
        tHash[t[i]] = s[i];
    }
    return true;
}