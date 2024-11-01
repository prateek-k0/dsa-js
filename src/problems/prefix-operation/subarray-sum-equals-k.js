// https://leetcode.com/problems/subarray-sum-equals-k/description/

// for all prefix problems: https://leetcode.com/discuss/study-guide/5119937/Prefix-Sum-Problems

/*
    Sub array sum equals k

    we need to first calculate the running sum (or prefix sum), while iterating store it in a hashmap

    while iterating, see if the hashmap has current running sum - k, if yes, increment count
*/

export function subarraySumEqualsK(nums, k) {
    const sumMap = {};
    let count = 0;
    let prefixSum = 0;
    // for 0 length subarray when k is 0, or when subarray sum is 0
    sumMap[0] = 1;
    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if(sumMap[prefixSum - k] !== undefined) {
            count += sumMap[prefixSum - k];
        }
        sumMap[prefixSum] = (sumMap[prefixSum] ?? 0) + 1;
    }
    console.log(sumMap);
    return count;
}