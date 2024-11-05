// https://leetcode.com/problems/count-of-interesting-subarrays/description/

export function countInterestingSubarrays(nums, modulo, k) {
    const hash = {};
    const numsModulo = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++) {
        numsModulo[i] = (nums[i] % modulo) === k ? 1 : 0;
    }
    let prefixSum = 0;
    let interestingCount = 0;
    // for 0 length subarray, there is 1 interesting subarray with count as 0
    hash[0] = 1;
    for(let i = 0; i < nums.length; i++) {
        prefixSum += numsModulo[i];
        prefixSum %= modulo;
        const targetMod = ((prefixSum - k + modulo) % modulo);   // added modulo since it coule be negative
        if(hash[targetMod] !== undefined) {
            interestingCount += hash[targetMod];
        }
        hash[prefixSum] = (hash[prefixSum] ?? 0) + 1;
    }
    return interestingCount;
}