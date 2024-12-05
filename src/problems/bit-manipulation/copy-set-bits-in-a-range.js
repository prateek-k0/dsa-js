/*
Given two numbers x and y, and a range [l, r] where 1 <= l, r <= 32. The task is consider set bits 
of y in range [l, r] and set these bits in x.
*/

export function copySetBitsInARange(x, y, l, r) {
    if(l < 1 || r > 32) return -1;  // l and r are 1-indexed
    for(let i = l; i <= r; i++) {
        // create a mask with ith bit set
        const mask = 1 << (i - 1);
        // now, if ith bit is set in y, set that bit in x too
        if(y & mask) {
            x |= mask;
        }
    }
    return x;
}