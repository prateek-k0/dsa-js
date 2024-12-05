// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

/*
Given two numbers ‘a’ and b’. Write a program to count number of bits needed to be 
flipped to convert ‘a’ to ‘b’. 
*/

/*
Algorithm:
  1. Calculate XOR of A and B.      
        a_xor_b = A ^ B
  2. Count the set bits in the above 
     calculated XOR result.
        countSetBits(a_xor_b)
*/

function countSetBits(num) {
    let bit = 0;
    let count = 0;
    while(bit < 32) {
        const isBitSet = num & (1 << i);
        count += (isBitSet !== 0) ? 1 : 0;
        bit++;
    }
    return count;
}

export function countBitFlips(a, b) {
    const xOr = a ^ b;
    return countSetBits(xOr);
}