// https://leetcode.com/problems/minimum-path-sum/

export function minPathSumMatrix(grid) {
    const dp = new Array(grid.length).fill(0).map((r) => new Array(grid[0].length).fill(-1));

    // start memoizing from end 
    const memoize = (i, j) => {
        if(i === 0 && j === 0) return grid[i][j];
        if(dp[i][j] !== -1) return dp[i][j]
        let m = Infinity;
        if(j > 0) {
            m = grid[i][j] + memoize(i, j-1);
        }
        if(i > 0) {
            let s = grid[i][j] + memoize(i-1, j);
            m = Math.min(m, s);
        }
        dp[i][j] = m;
        return m
    }
    return memoize(grid.length-1, grid[0].length-1);
};