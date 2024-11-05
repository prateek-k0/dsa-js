// Continuous Subarray Sum

// https://leetcode.com/problems/continuous-subarray-sum/description/

// store hash with position at which the prefix sum was found

export function continuousSubarraySum(nums, k) {
    const hash = {};
    // for 0 sum
    hash[0] = -1;
    let prefixSum = 0;
    for(let i = 0; i < nums.length; i++) {
        prefixSum += (nums[i] % k);
        prefixSum %= k;
        // if sum exists
        if(hash[prefixSum] !== undefined) {
            // and if the sum is at a distance >= 2
            if(i - hash[prefixSum] >= 2) {
                return true;
            }
        } else {
            // if it already doesnt exist
            hash[prefixSum] = i;
        }
    }
    return false;
}