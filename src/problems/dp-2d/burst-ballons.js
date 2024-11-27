// https://leetcode.com/problems/burst-balloons/description/

// solution: https://leetcode.com/problems/burst-balloons/solutions/6050011/best-explaination-for-beginners-partition-dp-matrix-chain-multiplication/

/*
    1. Instead of thinking about the first balloon to burst, imagine choosing the
    last balloon to burst in a range. This simplifies the problems because:
        - the coins earned depend only on the neighbours at that moment
        - the remaining balloons into 2 independent sub-problemns (like divide and conquer)
    
    2. To simplify boundary calculations, 
    add two virtual balloons with value 1 to the start and end of the array
    This ensures that bursting any balloon always has valid neighbors, even at the boundaries.

    memoize(l, r) :  computes the maximum coins that can be collected by bursting all balloons 
    in the range (l, r) (inclusive).    

    Recurrence Relation: dp[l][r]= max (coins from bursting i last+dp[l][i-1]+dp[i+1][r])
    where, 
    Coins from bursting i: nums[l-1]×nums[i]×nums[r+1].
    dp[l][i-1]: Maximum coins from the left subarray.
    dp[i+1][r]: Maximum coins from the right subarray.

*/

export function findMaxCoinsByBurstingBalloons(nums) {
    // padding 1 on each side for easier 
    const numsPadded = new Array(nums.length + 2).fill(1);
    for(let i = 0; i < nums.length; i++) {
        numsPadded[i+1] = nums[i];
    }
    const dp = new Array(nums.length + 1).fill(0).map((r) => new Array(nums.length + 1).fill(-1));
    const memoize = (l, r) => {
        // for error condition
        if(l > r) return 0;
        // if already memoized
        if(dp[l][r] !== -1) return dp[l][r];
        // initialze max coins for this range
        dp[l][r] = 0;
        // for each balloon in range [l...r], try bursting them last
        for(let i = l; i <= r; i++) {
            // instead of i-1 and i+1, we have l-1 and r+1, since this is considered the last balloon 
            // in this range, everything else will  be burst, hence we can only use balloons
            // outside of this range
            let coins = numsPadded[l - 1] * numsPadded[i] * numsPadded[r + 1];
            // recursively solve left and right subproblems
            coins += memoize(l, i - 1) + memoize(i + 1, r);
            dp[l][r] = Math.max(dp[l][r], coins);
        }
        return dp[l][r];
    }
    return memoize(1, nums.length);
}