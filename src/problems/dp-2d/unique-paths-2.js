// https://leetcode.com/problems/unique-paths-ii/

export function uniquePaths2(grid) {
    if(grid[0][0] === 1) return 0;
    const m = grid.length;
    const n = grid[0].length;
    if(grid[m-1][n-1] === 1) return 0;
    const dp = new Array(m).fill(0).map((r) => new Array(n).fill(0));
    dp[0][0] = 1;
    for(let i = 1; i < n; i++) {    // first row
        dp[0][i] = grid[0][i] === 0 ? dp[0][i-1] : 0;
    }
    for(let i = 1; i < m; i++) {    // first col
        dp[i][0] = grid[i][0] === 0 ? dp[i-1][0] : 0;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] === 0 ? dp[i-1][j] + dp[i][j-1] : 0;
        }
    }
    return dp[m-1][n-1]
};