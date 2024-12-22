// https://leetcode.com/problems/maximal-square

// solution: https://leetcode.com/problems/maximal-square/solutions/600149/python-thinking-process-diagrams-dp-approach

export function maximalSquare(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const dp = new Array(m).fill(0).map((r) => new Array(n).fill(-1));
    let maxLen = 0;
    const memoize = (r, c) => {
        if(isInBounds(r, c) === false) return 0;
        if(dp[r][c] !== -1) return dp[r][c];
        if(matrix[r][c] === "0") {
            dp[r][c] = 0;
            return dp[r][c];
        }
        // if(dp[r][c] !== -1) return dp[r][c];
        // else, check its neighbouring cells
        // for each of the next neighbours, (r, c+1), (r+1, c), (r+1, c)
        // only if all of them are 1, we can expand the square, else we cannot
        let res = 1 + Math.min(
            memoize(r, c+1),
            memoize(r+1, c),
            memoize(r+1, c+1)
        );
        dp[r][c] = res;
        return res;
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === '1') {
                const res = memoize(i, j);
                maxLen = Math.max(maxLen, res);
            }
        }
    }
    return maxLen ** 2;
};