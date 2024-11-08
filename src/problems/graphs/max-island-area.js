// https://leetcode.com/problems/max-area-of-island/description/

// max area of island of 1's in a grid

export function maxIslandArea(grid = []) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map((r) => new Array(n).fill(false));
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);

    const dfs = (r, c) => {
        if (isInBounds(r, c) === false) return 0;
        if (grid[r][c] !== 1) return 0;
        if (visited[r][c] === true) return 0;

        visited[r][c] = true;
        let currentArea = 1;
        currentArea += dfs(r, c + 1);
        currentArea += dfs(r, c - 1);
        currentArea += dfs(r + 1, c);
        currentArea += dfs(r - 1, c);
        return currentArea;
    }

    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[i][j] === false && grid[i][j] === 1) {
                const area = dfs(i, j);
                maxArea = Math.max(area, maxArea);
            }
        }
    }
    return maxArea;
}

// faster version -> instead of storing a separate visited array, just make grid[r][c] 0, so not
// to visit again

function maxArea2(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);

    const dfs = (r, c) => {
        if (isInBounds(r, c) === false) return 0;
        if (grid[r][c] !== 1) return 0;

        grid[r][c] = 0; // turn it 0, so it wont be later re-visited
        let currentArea = 1;
        currentArea += dfs(r, c + 1);
        currentArea += dfs(r, c - 1);
        currentArea += dfs(r + 1, c);
        currentArea += dfs(r - 1, c);
        return currentArea;
    }

    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const area = dfs(i, j);
                maxArea = Math.max(area, maxArea);
            }
        }
    }
    return maxArea;
};