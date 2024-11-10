// https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/description/

/*
    Series of 1's form the path
 The idea is that, if there are 2 or more non-intersecting paths (no common nodes 
 except start and finish), then its impossible,
 else, its possible to disconnect start and finish

 we first do a BFS / DFS from [0,0] to [m-1, n-1], and keep track of all nodes visited
 then, when we reach the destination, mark all the nodes in the path (that we kept track of) 
 as -1 or 2, except for [0, 0] and [m-1, n-1];

 We then again start a BFS / DFS from [0, 0] to [m-1, n-1], and see if we can reach the end
 if we can reach the end, then there are at least 2 non-intersecting paths, return false.

 else, there is atleast 1 common node in all the paths from start to finish, which can be flipped
 and paths from start to finish can be disconnected. return true.
*/

export function disconnectPathByFlipppingOnce(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);

    const markVisited = (nodes) => {    // mark all cells visited in the node seq
        for (const [r, c] of nodes) {
            grid[r][c] = -1;
        }
    }
    const bfs = () => {
        const q = [[0, 0, [[0, 0]]]];    // [r, c, node-seq]
        const visited = new Array(m).fill(0).map((r) => new Array(n).fill(false));
        while (q.length > 0) {
            const [r, c, seq] = q.shift();
            if (grid[r][c] !== 1) continue;
            if (visited[r][c] === true) continue;
            if ((r === m - 1) && (c === n - 1)) { // reached target
                markVisited(seq.slice(1, seq.length - 1));
                return true;
            }

            visited[r][c] = true;
            // visit neighbors; only 2 directions possible, [r, c+1] && [r+1, c]
            if (isInBounds(r, c + 1) === true && grid[r][c + 1] === 1 && visited[r][c + 1] === false) q.push([r, c + 1, seq.concat([[r, c + 1]])]);
            // if (isInBounds(r, c - 1) === true && grid[r][c - 1] === 1 && visited[r][c - 1] === false) q.push([r, c - 1, seq.concat([[r, c - 1]])]);
            if (isInBounds(r + 1, c) === true && grid[r + 1][c] === 1 && visited[r + 1][c] === false) q.push([r + 1, c, seq.concat([[r + 1, c]])]);
            // if (isInBounds(r - 1, c) === true && grid[r - 1][c] === 1 && visited[r - 1][c] === false) q.push([r - 1, c, seq.concat([[r - 1, c]])]);
        }
        return false;
    }

    let res1 = bfs();  // find 1st path;
    if (res1 === false) return true;  // already disconnected

    let res2 = bfs();   // find 2nd path;
    // console.log(grid);
    if (res2 === true) return false; // more than 1 non-intersecting paths
    return true;
}