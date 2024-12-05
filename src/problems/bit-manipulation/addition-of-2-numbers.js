// https://leetcode.com/problems/sum-of-two-integers/

/*
// addition of numbers in binary representation:
let bitSum = 0;
let bitCarry = 0;
while(bitCarry !== 0) {
    bitSum = aBit ^ bBit;   // sum of 2 bits
    bitCarry = aBit & bBit; // carry after sum
    aBit = bitSum;
    bBit = bitCarry << 1;   // shift the carry to left for later use
}
console.log(aBit)
*/

export function binarySum(a, b) {
    while(b !== 0) {
        const bitSum = a ^ b;
        const bitCarry = a & b;
        a = bitSum;
        b = bitCarry << 1;
    }
    return a;
}