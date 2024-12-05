// https://leetcode.com/problems/bitwise-and-of-numbers-range/description/

/*
    solution: https://www.geeksforgeeks.org/bitwise-and-or-of-a-range/

    initialize res = 0
    at each point, chech if MSB for l and r is at the same position.
    if its not, return res
    if they are, unset that bit in l and r and move to next iteration
*/

function getMostSignificantBit(n) {
    let pos = -1;
    while(n > 0) {
        n >>>= 1;
        pos++;
    }
    return pos;
}

export function bitwiseAndInRange(l, r) {
    // base conditions
    if(l === r) return l;
    if(l === 0 || r === 0) return 0;
    // else
    let res = 0;
    while(l > 0 && r > 0) {
        const msbl = getMostSignificantBit(l);
        const msbr = getMostSignificantBit(r);
        if(msbl !== msbr) break;
        // else
        res += (1 << msbl); // add current bit to solution
        // unset this bit in l and r
        l &= ~(1 << msbl);
        r &= ~(1 << msbl);
    }
    return res;
}