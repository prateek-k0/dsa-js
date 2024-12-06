// https://leetcode.com/problems/n-queens/description/

/*
    traverse to each row, and check in which column we can place the queen for that row
*/

export function nQueens(n) {
    const col = new Set();  //  to see if queen has been added in the columns inside the set
    // for diagonals
    const negativeDiag = new Set();
    const positiveDiag = new Set();
    const res = [];
    const board = new Array(n).fill(0).map((r) => new Array(n).fill('.'));

    const dfs = (r) => {
        // success condition, on placing queens in all rows
        if (r === n) {
            res.push(board.map((row) => row.join('')));
        }
        // traverse each col in this row and see if we can place a queen anywhere
        for (let c = 0; c < n; c++) {
            // already placed in col / positive diag / negative diag
            if (col.has(c) || positiveDiag.has(r + c) || negativeDiag.has(r - c)) {
                continue;
            }
            // else, try adding the queen here
            col.add(c);
            negativeDiag.add(r - c);
            positiveDiag.add(r + c);
            board[r][c] = 'Q';

            // go to next row
            dfs(r+1);

            // BACKTRACK
            col.delete(c);
            negativeDiag.delete(r - c);
            positiveDiag.delete(r + c);
            board[r][c] = '.';
        }
    }

    dfs(0);
    return res;
}