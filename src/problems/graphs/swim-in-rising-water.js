/*
    https://leetcode.com/problems/swim-in-rising-water/description/    

    Since we have a single source and a single target, we could either use Dijkstra's or BFS
    
    For Dijkstra's, if the elevation between 2 neighbouring cells is unequal, we can take that
    as a positive weight of the edge between those 2 cells,

    For example, if [x1, y1] is trying to reach its neighbouring cell [x2, y2], then the edge
    weight would be Math.max(grid[x1][y1], grid[x2][y2]);
*/

import { MinPriorityQueue } from "datastructures-js";

export function swimInRisingWater(grid) {
    const n = grid.length;  // square matrix
    const isInBounds = (r, c) => (r > -1 && r < n) && (c > -1 && c < n);
    const spt = new Array(n).fill(0).map((r) => new Array(n).fill(false));
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    // djikstra's
    const costFromSource = new Array(n).fill(0).map((r) => new Array(n).fill(Infinity));
    costFromSource[0][0] = grid[0][0]; 
    const pq = new MinPriorityQueue((v) => v[2]);
    pq.enqueue([0, 0, grid[0][0]]); // r, c, cost to reach [r,c]
    // the cost to reach any cell [r, c] from any other neighbouring cell with curr cost curr is
    // max(curr, grid[r][c]);
    while(pq.isEmpty() === false) {
        const [r, c, cost] = pq.dequeue();
        if(spt[r][c] === true) continue;
        spt[r][c] = true;
        // look for its neighbours
        for(const [dr, dc] of directions) {
            const [nr, nc] = [r+dr, c+dc];
            if(isInBounds(nr, nc) && spt[nr][nc] === false) {
                if(costFromSource[nr][nc] > Math.max(cost, grid[nr][nc])) {
                    costFromSource[nr][nc] = Math.max(cost, grid[nr][nc]);
                    pq.enqueue([nr, nc, Math.max(cost, grid[nr][nc])]);
                }
            }
        }
    }
    return costFromSource[n-1][n-1];
}


// dijkstra's, withour costFromSource
// we do not need to maintain the costFromSource Matrix,
// if we reach grid[n-1][n-1], we can exit early, since it is guaranteed that it will have min
// cost on reaching that cell the first time, because we're using priority queue.
export function swimInRisingWater2(grid) {
    const n = grid.length;  // square matrix
    const isInBounds = (r, c) => (r > -1 && r < n) && (c > -1 && c < n);
    const spt = new Array(n).fill(0).map((r) => new Array(n).fill(false));
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    // djikstra's
    let ans = Math.max(grid[0][0], grid[n-1][n-1]);
    const pq = new MinPriorityQueue((v) => v[2]);
    pq.enqueue([0, 0, grid[0][0]]); // r, c, cost to reach [r,c]
    // the cost to reach any cell [r, c] from any other neighbouring cell with curr cost curr is
    // max(curr, grid[r][c]);
    while(pq.isEmpty() === false) { // priority queue gurantees shortest path
        const [r, c, cost] = pq.dequeue();
        if(spt[r][c] === true) continue;
        spt[r][c] = true;
        ans = Math.max(ans, cost);  // update max cost
        // at the first time of coming to this cell, since cell[n-1][n-1] will have no unvisited memebers, we can exit early
        if(r === n-1 && c === n-1) break;   
        // look for its neighbours
        for(const [dr, dc] of directions) {
            const [nr, nc] = [r+dr, c+dc];
            if(isInBounds(nr, nc) && spt[nr][nc] === false) {
                pq.enqueue([nr, nc, Math.max(cost, grid[nr][nc])]); // simply enqueue, since we dont have costFromSource array now, we dont need to update min cost
            }
        }
    }
    return ans;
}