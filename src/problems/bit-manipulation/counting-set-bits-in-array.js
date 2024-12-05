// https://leetcode.com/problems/counting-bits/description/

function countSetBits(n) {
    let bit = 0;
    let count = 0;
    while(bit < 32) {
        const isSetBit = n & (1 << bit);
        count += (isSetBit !== 0) ? 1 : 0;
        bit++;
    }
    return count
}

export function countSetBitsInArray(n) {
    return new Array(n + 1).fill(0).map((e, i) => countSetBits(i));
}