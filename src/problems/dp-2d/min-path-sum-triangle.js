// https://leetcode.com/problems/triangle/

export function minPathSumTriangle(triangle) {
    const dp = new Array(triangle.length).fill(0).map((r) => new Array(triangle.length + 2).fill(-1));
    const memoize = (level, index) => {
        if(level === triangle.length) return 0;
        if(index >= triangle[level].length) return Infinity;
        if(dp[level][index] !== -1) return dp[level][index];
        // else
        dp[level][index] = triangle[level][index] + Math.min(
            memoize(level + 1, index),
            memoize(level + 1, index + 1)
        );
        return dp[level][index];
    };
    return memoize(0, 0);
};