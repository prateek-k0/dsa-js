// https://leetcode.com/problems/minimum-size-subarray-sum/description

export function minSizeSubarraySum(target, nums) {
    let minLen = Infinity;
    let currSum = 0;
    let l = 0;
    for(let r = 0; r < nums.length; r++) {
        currSum += nums[r];
        while(l <= r && currSum >= target) {
            if(currSum >= target) minLen = Math.min(minLen, r - l + 1);
            currSum -= nums[l];
            l++;
        }
    }
    return minLen !== Infinity ? minLen : 0;
}