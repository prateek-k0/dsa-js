// https://leetcode.com/problems/single-number-ii/

// this is a general solution for elements occuring k times, except for 1 element, which only occurs 1 time
export function singleNumber2(nums) {
    const bits = new Array(32).fill(0); // to store occurrences of freq of bits
    for (let num of nums) {
        for (let i = 31; i >= 0; i--) {  // start from reverse, since MSB is at 31, LSB is at 0
            bits[i] += num & 1;
            num >>= 1;
        }
    }
    let res = 0;
    let n = 0;
    for (let i = 31; i >= 0; i--) {
        n = bits[i] % 3;    // "3" here is k, 
        if (n) res += (1 << (31 - i));
    }
    return res;
}