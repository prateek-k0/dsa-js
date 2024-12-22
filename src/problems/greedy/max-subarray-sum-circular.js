// https://leetcode.com/problems/maximum-sum-circular-subarray/

/*
    we can solve this using kadane's algorithm

    we need to do it in 2 parts:
    1. find max subarray sum in non-circular sum
    2. for circular sum, find min subarray sum, max subarray sum = total - minsubarray sum
    max subarray sum for circular = max of parts 1 and 2

    // https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/633401/
*/
function maxSubarraySum(nums) {
    let sum = 0;    // to store current sum
    let maxSum = -Infinity; // to store max sum
    for(let num of nums) {
        sum += num; // add current num to current sum
        if(sum > maxSum) maxSum = sum;  // check if current sum > maxSum, if yes, update maxSum
        if(sum < 0) sum = 0;    // if current sum < 0, disregard the subarray, reset current sum to 0
    }
    return maxSum;
}

function minSubarraySum(nums) {
    let minSum = 0;
    let sum = 0;
    for(let num of nums) {
        sum += num;
        if(sum < minSum) minSum = sum;
        if(sum > 0) sum = 0;
    }
    return minSum
}

export function maxSubarraySumCircular(nums) {
    const maxSubarraySumKadane = maxSubarraySum(nums);
    const minSubarraySumKadane = minSubarraySum(nums);
    const totalSum = nums.reduce((a, c) => a + c);
    if(totalSum === minSubarraySumKadane) return maxSubarraySumKadane;
    return Math.max(maxSubarraySumKadane, totalSum - minSubarraySumKadane);
}


