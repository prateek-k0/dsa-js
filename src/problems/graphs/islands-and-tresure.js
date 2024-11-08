// https://neetcode.io/problems/islands-and-treasure

// use multi root bfs to solve the problem,  since dfs cant guarantee the shortest path

export function islandsAndTreasure(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const visited = new Array(m).fill(0).map((r) => new Array(n).fill(false));
    const INF = 2147483647;

    const queue = [];

    // enqueue all zeros in the queue
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 0) {
                queue.push([i, j, 0]);  // row, col, current Distance from nearest 0
            }
        }
    }

    // run the bfs
    while(queue.length > 0) {
        const [r, c, distance] = queue.shift();
        if(isInBounds(r, c) === false) continue;
        if(distance > 0 && grid[r][c] !== INF) continue;
        if(visited[r][c] === true) continue;

        visited[r][c] = true;
        grid[r][c] = distance;
        
        queue.push([r, c+1, distance+1]);
        queue.push([r, c-1, distance+1]);
        queue.push([r+1, c, distance+1]);
        queue.push([r-1, c, distance+1]);
    }
    console.log(grid);
    // no need to return grid
}