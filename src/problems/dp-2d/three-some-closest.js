// https://leetcode.com/problems/3sum-closest

/*
    Three sum closest - dp solution

    We use top-down dp solution. At every recursion, we have to choices:
    - include an element into the sum, if total count of included elements is < 3
    - exclude an element from the sum
*/
// without dp - recursion only
export function threeSumClosest(nums, target) {
    const memoize = (index = 0, included = 0, currentSum = 0) => {
        // if already included enough elements, return currentSum
        if(included === 3) return currentSum;
        // if exceeded all possible elements, return Infinity, since we don't want to include this sum
        if(index === nums.length) return Infinity;
        // calculate for sum including and excluding this num
        const resIncluded = memoize(index + 1, included + 1, currentSum + nums[index]);
        const resExcluded = memoize(index + 1, included, currentSum);
        // return the one with min distance from target
        return Math.abs(resIncluded - target) < Math.abs(resExcluded - target) ? resIncluded : resExcluded;
    }
    return memoize(0, 0, 0);
}

// with memoization

export function threeSumClosestDP(nums, target) {
    // memo array : dp[num-index][included-count][current-sum]
    // included count is always <= 3, so we keep co, size as 3 + 1 => 4
    const dp = new Array(nums.length).fill(0).map((r) => new Array(4).fill(0).map(() => ({})));
    const memoize = (index = 0, included = 0, currentSum = 0) => {
        // if already included enough elements, return currentSum
        if(included === 3) return currentSum;
        // if exceeded all possible elements, return Infinity, since we don't want to include this sum
        if(index === nums.length) return Infinity;
        // if already memoized, return it
        if(dp[index][included][currentSum] !== undefined) return dp[index][included][currentSum];

        // calculate for sum including and excluding this num
        const resIncluded = memoize(index + 1, included + 1, currentSum + nums[index]);
        const resExcluded = memoize(index + 1, included, currentSum);
        // store the minimum
        dp[index][included][currentSum] = Math.abs(resIncluded - target) < Math.abs(resExcluded - target) ? resIncluded : resExcluded;
        
        // return the output for current state.
        return dp[index][included][currentSum];
    }
    return memoize(0, 0, 0);
}