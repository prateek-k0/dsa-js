// https://leetcode.com/problems/target-sum/description/

/*
    Memoization (top down) method
    dp is a 2d array
    dp[i][currSum] = current ways to reach ith index with sum currSum
*/

export function targetSumExpression(nums, target) {
    const n = nums.length;
    const dp = new Array(n).fill(0).map((r) => ({}));
    const memoize = (index, currentSum) => {
        if(index === nums.length) { // if index is at the end, check if we have the target sum
            return currentSum === target ? 1 : 0;
        }
        if(dp[index][currentSum] !== undefined) return dp[index][currentSum];
        // check with both scenarios
        const addCurr = memoize(index + 1, currentSum + nums[index]);
        const subtractCurr = memoize(index + 1, currentSum - nums[index]);
        dp[index][currentSum] = addCurr + subtractCurr;
        return dp[index][currentSum];
    }
    memoize(0, 0);
    return dp[0][0];    // 0th index with 0 sum represents the root of recursive tree
}