// https://leetcode.com/problems/pacific-atlantic-water-flow/

/*
    Check if each cell is reachable to both pacific and atlantic
    For each cell, we mave have to crate new visited array
    Or, we can simply keep track of last visited cell

    we have to keep 2 matrix's isAtlanticReachable and isPacificReachable, for memoization
*/

export function pacificAtlanticWaterFlow(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const isAtlanticReachable = new Array(m).fill(0).map((r) => new Array(n).fill(false));
    const isPacificReachable = new Array(m).fill(0).map((r) => new Array(n).fill(false));

    // multi source bfs / dfs from 1st row and 1st column for pacific, and last row and last column for atlantic
    const dfs = (r, c, ocean) => {
        if(isInBounds(r, c) === false) return;
        if(ocean[r][c] === true) return;
        // else, mark the cell as reachable from current ocean
        ocean[r][c] = true;
        // traverse to 4 directions
        if(isInBounds(r, c+1) && grid[r][c+1] >= grid[r][c]) {  // reverse condition, because we are searching from ocean to the cell, and not cell to the ocean
            dfs(r, c+1, ocean);
        }
        if(isInBounds(r, c-1) && grid[r][c-1] >= grid[r][c]) {
            dfs(r, c-1, ocean);
        }
        if(isInBounds(r+1, c) && grid[r+1][c] >= grid[r][c]) {
            dfs(r+1, c, ocean);
        }
        if(isInBounds(r-1, c) && grid[r-1][c] >= grid[r][c]) {
            dfs(r-1, c, ocean);
        }
        return;
    }
    // dfs from 1st row and 1st column for pacific reachability
    for(let i = 0; i < m; i++) {
        dfs(i, 0, isPacificReachable);
    }
    for(let j = 0; j < n; j++) {
        dfs(0, j, isPacificReachable);
    }
    // dfs from last row and last column for atlantic reachability
    for(let i = 0; i < m; i++) {
        dfs(i, n-1, isAtlanticReachable);
    }
    for(let j = 0; j < n; j++) {
        dfs(m-1, j, isAtlanticReachable);
    }
    // see if cells are reachable from both pacific and atlantic
    const res = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(isPacificReachable[i][j] === true && isAtlanticReachable[i][j] === true) {
                res.push([i, j]);
            }
        }
    }
    return res;
}