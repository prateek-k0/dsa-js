// https://www.geeksforgeeks.org/divide-the-array-in-k-segments-such-that-the-sum-of-minimums-is-maximized/

/*
    We can use a Top down dp approach for this
    dp[i][k] = max sum of minimums in each segment, where k is the number of segments
*/

export function maximizeMinSum(nums, k) {
    const n = nums.length;  
    // base error condition
    if(n < k) return -Infinity;
    const dp = new Array(n).fill(0).map((r) => new Array(k + 1).fill(-1));
    const memoize = (i, segments) => {
        // check if all segments have been used
        if(segments === k) {
            // return only for segments that have exhausted all the elemnts
            return i === n ? 0 : -Infinity;
        }
        // else, if elements are exhausted before using all segments, return error
        if(i === n) return -Infinity;
        // if already memoized, return it
        if(dp[i][segments] !== -1) return dp[i][segments];
        // else, check each element from index to n, and use it for each segment
        let minimum = nums[i];  // stores the minimum for this segment
        let res = 0;
        for(let index = i; index < n; index++) {
            // get minimum for this segment
            minimum = Math.min(minimum, nums[index]);
            // create a segment at this place see if its max, for every iteration
            res = Math.max(res, memoize(index + 1, segments + 1) + minimum);
        }
        dp[i][segments] = res;
        return res;
    }
    memoize(0, 0);
    return dp[0][0];
}