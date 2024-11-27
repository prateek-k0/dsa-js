// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/

/*  
    Topological sort solution (Kahn's algo)
    For DP solution, search in dp-2d
    For every cell, if a neighbouring cell is greater than current cell, then
    indegree of that cell increases by 1.

    Run kahn's alogorithm for cells with indegree as 0
*/

export function longestIncreasingPathMatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const inDegree = new Array(m).fill(0).map((r) => new Array(n).fill(0));
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // update in degrees of the cells
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            // check cells in all directions
            for(const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if(isInBounds(nr, nc) && matrix[nr][nc] > matrix[r][c]) {
                    inDegree[nr][nc]++;
                }
            }
        }
    }
    // Kahn's algo
    // enqueue all cells with 0 indegree in the queue
    const q = [];
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(inDegree[r][c] === 0) q.push([r, c, 1]); // row, col, increasing-len
        }
    }
    let maxLen = 1;
    while(q.length > 0) {
        const [r, c, len] = q.shift();
        maxLen = Math.max(maxLen, len);
        // check all its directions
        for(const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if(isInBounds(nr, nc) && matrix[nr][nc] > matrix[r][c]) {
                inDegree[nr][nc]--;
                if(inDegree[nr][nc] === 0) q.push([nr, nc, len+1]);
            }
        }
    }
    return maxLen;
}