// number of islands

// https://leetcode.com/problems/number-of-islands/description/

// run dfs for each unvisited cell, and increase count of islands

export function findIslands(grid = []) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map((r) => new Array(n).fill(false));
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);

    const dfs = (r, c) => {
        if(isInBounds(r, c) === false) {
            return
        }
        if(visited[r][c] === true) {
            return;
        }
        if(grid[r][c] !== '1') {
            return;
        }
        visited[r][c] = true;
        dfs(r, c+1);
        dfs(r, c-1);
        dfs(r+1, c);
        dfs(r-1, c);
    }

    let islandCount = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(visited[i][j] === false && grid[i][j] === '1') {
                dfs(i, j);
                islandCount ++;
            }
        }
    }
    return islandCount;
}