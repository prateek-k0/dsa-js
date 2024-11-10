// https://leetcode.com/problems/shortest-bridge/description/

/*
There are 2 solutions for this:
Approach 1:  2-pass dfs / bfs traversal
- Since there are only 2 islands, we can start with the first cell with 1 and bfs / dfs from there,
    visit only 1's and mark each cell as 2. This will be the first island, which is now an island of 2's.
- Then, we can multisource bfs from all 2's to find the 1st 1, keeping track of the cost. 
    Only visit 0's and 1's, dont visit 2's
    When the first 1 is found, thats the answer.

Approach 2: 1 pass 0-1 bfs
    use 0-1 BFS, prioritize visiting 1's before zeros. The root / start will be the first 1 in the grid.
    On visit of every 1 in the first islands, mark them as 2 to not visit them again
    Then, after visiting all 1's nearby, start visiting 0, keeping track of the cost
    Then, on finding the first 1, return the cost
    cost for visiting cell with value 1: 0
    cost for visiting cell with value 0: 1
*/

export function shortestBridge(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    // find the first 1 in the grid
    const findFirst1 = () => {
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 1) {
                    return [i, j];
                }
            }
        }
        return [0, 0];
    } 
    const start = findFirst1();
    // 0-1 bfs
    const dq = [[start[0], start[1], 0]];   // [r, c, cost];
    let isFirstIslandVisited = false;
    while(dq.length > 0) {
        const [r, c, cost] = dq.shift();
        if(grid[r][c] === 2) continue;  // if already visited
        
        // if grid[r][c] === 0 is hit for the first time, then first island is completed visiting
        if(grid[r][c] === 0 && isFirstIslandVisited === false) {
            isFirstIslandVisited = true;
        }

        // now, if isFirstIslandVisited === true and grid[r][c] === 1, return cost as ans
        if(isFirstIslandVisited === true && grid[r][c] === 1) {
            return cost;
        }

        grid[r][c] = 2;
        // check its neighbours
        if(isInBounds(r, c+1) && grid[r][c+1] !== 2) {
            // push in front or back depending on whether its 1 or 0
            if(grid[r][c+1] === 0) dq.push([r, c+1, cost+1]);   // visiting 0 incurs cost
            else dq.unshift([r, c+1, cost]);    // push in front
        }
        if(isInBounds(r, c-1) && grid[r][c-1] !== 2) {
            if(grid[r][c-1] === 0) dq.push([r, c-1, cost+1]);   // visiting 0 incurs cost
            else dq.unshift([r, c-1, cost]);    // push in front
        }
        if(isInBounds(r+1, c) && grid[r+1][c] !== 2) {
            if(grid[r+1][c] === 0) dq.push([r+1, c, cost+1]);   // visiting 0 incurs cost
            else dq.unshift([r+1, c, cost]);    // push in front
        }
        if(isInBounds(r-1, c) && grid[r-1][c] !== 2) {
            if(grid[r-1][c] === 0) dq.push([r-1, c, cost+1]);   // visiting 0 incurs cost
            else dq.unshift([r-1, c, cost]);    // push in front
        }
    }
    return -1;
}