// https://leetcode.com/problems/maximum-subarray/

/*
    we can solve this using kadane's algorithm
*/

export function maxSubarraySum(nums) {
    let sum = 0;    // to store current sum
    let maxSum = -Infinity; // to store max sum
    for(let num of nums) {
        sum += num; // add current num to current sum
        if(sum > maxSum) maxSum = sum;  // check if current sum > maxSum, if yes, update maxSum
        if(sum < 0) sum = 0;    // if current sum < 0, disregard the subarray, reset current sum to 0
    }
    return maxSum;
}