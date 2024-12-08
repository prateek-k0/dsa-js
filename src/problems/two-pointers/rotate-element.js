// https://leetcode.com/problems/rotate-array/description/

/*
    Approach

    1. split array to two chunks by indices [0,numsSize-1-k] and [numsSize-k,numsSize-1] 
    then reverse the the elements in place (no additional memory allocation)
    
    2.mirror the array by swapping elements.

*/  

export function rotateArrayByK(nums, k) {
    const n = nums.length;
    k = k % n;    // reduce k for k >= n
    // left part = [0...n-k-1]
    // right part = [n-k...n]
    // reverse each parts
    for(let i = 0; i < (n - k) / 2; i++) {
        [nums[i], nums[n-k-i-1]] = [nums[n-k-i-1], nums[i]];
    }
    for(let i = 0; i < k/2; i++) {
        [nums[i+n-k], nums[n-i-1]] = [nums[n-i-1], nums[i+n-k]];
    }
    // mirro the array at the center
    for(let i = 0; i < n / 2; i++) {
        [nums[i], nums[n-i-1]] = [nums[n-i-1], nums[i]];
    }
}