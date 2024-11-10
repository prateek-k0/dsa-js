// https://leetcode.com/problems/surrounded-regions/description/

/*
    DFS from all the O on the edge, mark as some other character (say M)
    then all the remaining O's can be marked as X
    then, all the O's that were marked as M can be marked O again
*/

export function surroundedRegions(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);

    // to change all O's with border regioned cells to M
    const dfs = (r, c) => {
        if(isInBounds(r, c) === false) return;
        if(grid[r][c] !== 'O') return;
        // else
        grid[r][c] = 'M';   // change to M
        dfs(r, c+1);
        dfs(r, c-1);
        dfs(r+1, c);
        dfs(r-1, c);
    }
    // first col
    for(let i = 0; i < m; i++) {
        dfs(i, 0);
    }
    // first row
    for(let j = 0; j < n; j++) {
        dfs(0, j);
    }
    // last column
    for(let i = 0; i < m; i++) {
        dfs(i, n-1);
    }
    // last row
    for(let j = 0; j < n; j++) {
        dfs(m-1, j);
    }

    // for all other O's, change to X, and for M's, change to O
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 'O') {
                grid[i][j] = 'X';
            } else if(grid[i][j] === 'M') {
                grid[i][j] = 'O';
            }
        }
    }

    console.log(grid);
}

// BFS version
export function surroundedRegionsBFS(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);

    const bfs = (r, c) => {
        const queue = [[r, c]];
        while(queue.length > 0) {
            const [r,c] = queue.shift();
            if(grid[r][c] !== 'O') continue;

            grid[r][c] = 'M';
            if(isInBounds(r, c+1) && grid[r][c+1] === 'O') queue.push([r, c+1]);
            if(isInBounds(r, c-1) && grid[r][c-1] === 'O') queue.push([r, c-1]);
            if(isInBounds(r+1, c) && grid[r+1][c] === 'O') queue.push([r+1, c]);
            if(isInBounds(r-1, c) && grid[r-1][c] === 'O') queue.push([r-1, c]);
        }
    }

    // first col
    for(let i = 0; i < m; i++) {
        if(grid[i][0] === 'O') bfs(i, 0);
    }
    // first row
    for(let j = 0; j < n; j++) {
        if(grid[0][j] === 'O') bfs(0, j);
    }
    // last column
    for(let i = 0; i < m; i++) {
        if(grid[i][n-1] === 'O') bfs(i, n-1);
    }
    // last row
    for(let j = 0; j < n; j++) {
        if(grid[m-1][j] === 'O') bfs(m-1, j);
    }
    // for all other O's, change to X, and for M's, change to O
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 'O') {
                grid[i][j] = 'X';
            } else if(grid[i][j] === 'M') {
                grid[i][j] = 'O';
            }
        }
    }
    console.log(grid);
}