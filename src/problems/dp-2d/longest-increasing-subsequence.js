// https://leetcode.com/problems/longest-increasing-subsequence

/*
    We can solve also solve this with greedy + bin search (check greedy section)

    Here we have a top down (memoization) solution for this problem
    here, we use a dp array to keep track of length of LIS from each index i,
    for each index i, dp[i] = length of LIS from arr[i...arr.length];
    to find LIS, 
    - we can either include the current element, if its greater 
    than a previous element included in the LIS,
    - or exclude the element.
    we store each max of each option in the array
*/

export function LIS(nums) {
    const dp = new Array(nums.length + 1).fill(0).map((r) => new Array(nums.length + 1).fill(-1));  
    function findLIS(currIndex = 0, prevIndex = -1) {
        if(currIndex === nums.length) return 0; // end
        if(dp[currIndex][prevIndex + 1] !== -1) return dp[currIndex][prevIndex + 1]; // already memoized
        let includingCurr = 0;
        if(prevIndex === -1) {   // if this is the first element,
            includingCurr = 1 + findLIS(currIndex + 1, currIndex);
        } else if(nums[currIndex] > nums[prevIndex]) {  //  current Element > prev element
            includingCurr = 1 + findLIS(currIndex + 1, currIndex);
        }
        let excludingCurr = findLIS(currIndex + 1, prevIndex);
        dp[currIndex][prevIndex + 1] = Math.max(includingCurr, excludingCurr);
        return dp[currIndex][prevIndex + 1];
    }
    return findLIS();
}