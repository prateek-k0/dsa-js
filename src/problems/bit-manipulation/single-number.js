// https://leetcode.com/problems/single-number/description/

export function singleNumber(nums) {
    const xOr = nums.reduce((a, c) => a ^ c);
    return xOr; // xOr of elements with even frequency is 0
}