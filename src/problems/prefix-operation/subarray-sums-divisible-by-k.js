// subarray sums dvisible by k

// https://leetcode.com/problems/subarray-sums-divisible-by-k/description/

/*
    we can store prefix[i] % k (or (prefix[k] % k + k) % k) in the hash
    and if it exists, increment count
*/

export function subarraySumsDivisibleByK(nums, k) {
    const hash = {};
    // for zero length subarray
    hash[0] = 1;
    let prefixSum = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const mod = ((prefixSum % k) + k) % k;  // we add +k since mod could be negative
        if(hash[mod] !== undefined) {
            count += hash[mod];
        }
        hash[mod] = (hash[mod] ?? 0) + 1;
    }
    return count;
}