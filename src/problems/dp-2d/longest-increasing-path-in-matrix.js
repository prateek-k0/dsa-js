// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/

/*
    DP[r][c] stores the longest increasing path from matrix[r][c]
    if for matrix[r][c] any of the neighbours is greater than it, then
    dp[r][c] = 1 + Max(dp[r+1][c], dp[r-1][c], dp[r][c+1], dp[r][c-1]);
    if none of the neighbours are larger, then dp[r][c] = 1;
*/

export function longestIncreasingPathMatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const dp = new Array(m).fill(0).map((r) => new Array(n).fill(-1));
    const memoizeDFS = (r, c) => {
        // if out of bounds
        if(isInBounds(r, c) === false) return 0;
        // if already memoized
        if(dp[r][c] !== -1) return dp[r][c];
        // else, calculate LIP
        let res = 0;    // min length of LIP is 1
        let top = 0;
        let right = 0;
        let bottom = 0;
        let left = 0;
        // check for all 4 directions
        if(isInBounds(r-1, c) && matrix[r-1][c] > matrix[r][c]) {
            top = memoizeDFS(r-1, c);
        }
        if(isInBounds(r+1, c) && matrix[r+1][c] > matrix[r][c]) {
            bottom = memoizeDFS(r+1, c);
        }
        if(isInBounds(r, c-1) && matrix[r][c-1] > matrix[r][c]) {
            left = memoizeDFS(r, c-1);
        }
        if(isInBounds(r, c+1) && matrix[r][c+1] > matrix[r][c]) {
            right = memoizeDFS(r, c+1);
        }
        res = 1 + Math.max(top, right, bottom, left);
        dp[r][c] = res;
        return dp[r][c];
    }
    let LIP = 0;
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            LIP = Math.max(LIP, memoizeDFS(r, c));
        }
    }
    return LIP;
}