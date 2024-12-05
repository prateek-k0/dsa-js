// https://leetcode.com/problems/number-of-1-bits/description/

export function numberOf1Bits(n) {
    let bit = 0;
    let count = 0;
    while(bit < 32) {
        const isSetBit = n & (1 << bit);
        count += (isSetBit !== 0) ? 1 : 0;
        bit++;
    }
    return count
}

// another way
let hammingWeight = function(n) {
    let count = 0
    while(n > 0) {
        if(n & 1) count ++; // if first bit is 1, increment count
        n >>>= 1;   // remove first bit 
    }
    return count;
};