// https://leetcode.com/problems/house-robber-ii/description/

/*
    Very similar to house robber, but now since the houses are arranged in a circular manner,
    we can rob:
    1. either we can include 1st and last-1 houses,
    2. or we can include 2nd and last houses

    now we can simply use house-robber's solution for each scenario
    we have to keep the dp array's length at n-1, since we would be storing for [0...n-2] for first scenarion, or [1...n-1] for the second scenario
*/

export function houseRobberCircular(nums) {
    // base conditions
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    const dp1 = new Array(nums.length - 1).fill(0); // for scenario 1
    const dp2 = new Array(nums.length - 1).fill(0); // for scenario 2

    // for scenario 1 - include first and 2nd last houses
    const nums1 = nums.slice(0, nums.length - 1);
    dp1[0] = nums1[0];
    dp1[1] = Math.max(dp1[0], nums1[1]);
    for(let i = 2; i < nums1.length; i++) {
        dp1[i] = Math.max(dp1[i-2]+nums1[i], dp1[i-1]);
    }

    // for scenario 2 - include 2nd and last houses
    const nums2 = nums.slice(1);
    dp2[0] = nums2[0];
    dp2[1] = Math.max(dp2[0], nums2[1]);
    for(let i = 2; i < nums2.length; i++) {
        dp2[i] = Math.max(dp2[i-2]+nums2[i], dp2[i-1]);
    }
    // look for max result
    return Math.max(dp1[nums.length - 2], dp2[nums.length - 2]);
}