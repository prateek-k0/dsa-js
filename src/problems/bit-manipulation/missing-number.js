// https://leetcode.com/problems/missing-number/description/

export function missingNumber(nums) {
    // since numbers are in range from [0...n], we can take xOr with indices from [0...n];
    let xOr = 0;
    // first, we'll take the xOr of all elements
    xOr = nums.reduce((a, c) => a ^ c, xOr);
    // next, use this xOr to find xor with all indiced from 0...n
    for(let i = 0; i <= nums.length; i++) {
        xOr ^= i;
    }
    // whats remaining now in the xOr is the missing number
    return xOr;
}