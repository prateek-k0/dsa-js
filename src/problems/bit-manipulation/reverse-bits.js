// https://leetcode.com/problems/reverse-bits/description/

// we need to cinvert the number to binary, and then perform shifting ops

export function reverseBits(n) {
    let result = 0b0; // bin representaion
    for(let i = 0; i < 32; i++) {
        const lastBit = n & 0b1;  // get the last bit
        result <<= 1;   // left shift the result for next bits
        result |= lastBit;  // add last bit to result
        n >>>= 1;   // remove last bit from n;
    }
    // convert to number again
    return result >>> 0;
}