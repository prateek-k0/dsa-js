// https://leetcode.com/problems/unique-paths/

export function uniquePaths(m, n) {
    // this dp array stores the number of ways to reach cell [i][j]
    const dp = new Array(m).fill(0).map((r) => new Array(n).fill(0));

    // for first row, we can reach every cell in it by travelling right-ward
    for(let i = 0; i < n; i++) dp[0][i] = 1;

    // for first column, we can reach every cell in it by travelling down-ward
    for(let i = 0; i < m; i++) dp[i][0] = 1;

    // for every other cells, we can reach it by 2 ways: 
    // 1. going down from its top neighbour
    // 2. going left from its left neighbour
    // Tabulation (bottom up)
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}