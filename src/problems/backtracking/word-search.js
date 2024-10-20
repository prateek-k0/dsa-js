// https://leetcode.com/problems/word-search/

function getVisitedArray(m = 6, n = 6) {
    const array = new Array(m).fill(null);
    for (let i = 0; i < m; i++) {
        array[i] = new Array(n).fill(false);
    }
    return array;
}

export function wordSearch(board, word) {
    const isOutOfBounds = (row, col) => {
        const isRowOutOfBound = row < 0 || row > board.length - 1;
        const isColOutOfBound = col < 0 || col > board[0].length - 1;
        return isRowOutOfBound || isColOutOfBound
    }
    const dfs = (r = 0, c = 0, currentLen = 0, visited) => {
        if (currentLen === word.length) return true;
        if (isOutOfBounds(r, c) === true) return false;
        if (visited[r][c] === true) return false;
        if (board[r][c] !== word[currentLen]) return false;
        // set 
        visited[r][c] = true;
        // go to all directions
        const result = dfs(r + 1, c, currentLen + 1, visited) // down
            || dfs(r - 1, c, currentLen + 1, visited) // up
            || dfs(r, c + 1, currentLen + 1, visited)  // left
            || dfs(r, c - 1, currentLen + 1, visited);
        visited[r][c] = false;  // unset and backtrack
        return result;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0, getVisitedArray()) === true) return true;
        }
    }
    return false;
}