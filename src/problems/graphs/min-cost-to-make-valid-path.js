// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/description/

/*
    One approach is to Build a graph where grid[i][j] is connected to all the four side-adjacent 
    cells with weighted edge. the weight is 0 if the sign is pointing to the adjacent cell or 1 
    otherwise.
    and then do BFS from (0, 0) visit all edges with weight = 0 first. the answer is the 
    distance to (m -1, n - 1).

    The other approach is to use bfs on graph itself. We can use 0-1 bfs for this, 
    putting 0-cost neighbours in the front, and 1 cost neighbours in the back
*/
// path from [0,0] to [m-1, n-1]
export function minCostToMakeValidPath(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const directions = {
        1: (r, c) => [r, c + 1],
        2: (r, c) => [r, c - 1],
        3: (r, c) => [r + 1, c],
        4: (r, c) => [r - 1, c]
    }

    // bfs 0-1
    const dq = [[0, 0, 0]]; // r, c, cost
    grid[0][0] = -1;
    while (dq.length > 0) {
        const [r, c, cost] = dq.shift();
        if (grid[r][c] === -1) continue;
        if ((r === m - 1) && (c === n - 1)) return cost;  // true condition
        let currentDir = grid[r][c];    // save for later use
        // check its unvisited neighbours
        for (const key in directions) {
            const [nr, nc] = directions[key](r, c);
            if (isInBounds(nr, nc) === true && grid[nr][nc] !== -1) {    // is in bounds of the grid and not visited
                if (+key === currentDir) {    // same direction, put in front with 0 cost
                    dq.unshift([nr, nc, cost]);
                } else {    // push from rear with extra cost
                    dq.push([nr, nc, cost + 1]);
                }
                // visit before removing for bfs iteration, mark visited as -1
                grid[r][c] = -1;
            }
        }
    }
    // console.log(grid);
    return -1;
}