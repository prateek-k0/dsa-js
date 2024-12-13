// https://leetcode.com/problems/longest-common-prefix/description/

export function longestCommonPrefix(strs) {
    let firstString = strs[0];
    let prefixRes = "";
    let l = 0;
    let r = firstString.length - 1;
    let m = 0;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        const prefixSubstring = firstString.slice(0, m + 1);
        const hasPrefix = strs.reduce((a, c) => a && c.indexOf(prefixSubstring) === 0, true);
        if (hasPrefix === true) {
            prefixRes = prefixSubstring;
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return prefixRes;
}