// https://leetcode.com/problems/rotting-oranges/description/

// use multi root bfs, with roots at all rotten oranges
// 0 is empty, 1 is fresh, 2 is rotten

export function rottenOranges(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const visited = new Array(m).fill(0).map((r) => new Array(n).fill(0));

    const queue = [];
    let freshCount = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2) {
                queue.push([i, j, 0]);  // row, col, minutes passed
            } else if(grid[i][j] === 1) {
                freshCount++;
            }
        }
    }

    if(queue.length === 0 && freshCount > 0) return -1;   // no rotten oranges, but has fresh oranges
    if(freshCount === 0) return 0;  // no fresh oranges

    let maxMinutes = 0;
    while(queue.length > 0) {
        const [r, c, minutes] = queue.shift();
        if(isInBounds(r, c) === false) continue;
        if(minutes > 0 && grid[r][c] !== 1) continue;
        if(visited[r][c] === true) continue;

        visited[r][c] = true;
        grid[r][c] = 2;
        maxMinutes = Math.max(maxMinutes, minutes);
        queue.push([r, c+1, minutes+1]);
        queue.push([r, c-1, minutes+1]);
        queue.push([r+1, c, minutes+1]);
        queue.push([r-1, c, minutes+1]);
    }
    
    // see if all oranges are rotten, else return -1
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                return -1;  // fresh found, false
            }
        }
    }

    return maxMinutes;
}