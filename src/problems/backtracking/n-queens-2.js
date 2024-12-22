// https://leetcode.com/problems/n-queens-ii/

/*
    traverse to each row, and check in which column we can place the queen for that row
*/

export function nQueens(n) {
    const col = new Set();  //  to see if queen has been added in the columns inside the set
    // for diagonals
    const negativeDiag = new Set();
    const positiveDiag = new Set();
    let count = 0;

    const dfs = (r) => {
        // success condition, on placing queens in all rows
        if (r === n) {
            count++;
        }
        // traverse each col in this row and see if we can place a queen anywhere
        for (let c = 0; c < n; c++) {
            // every diagonal can be represented by the difference in the co-ords of its cells
            // for a diagional that contains cells (r, c), (r1, c1), ..., the diff
            // between row and col indices of each cell within that diagonal is constant, ie,
            // (r - c) === (r1 - c1) === (r2 - c2) ...
            // already placed in col / positive diag / negative diag
            if (col.has(c) || positiveDiag.has(r + c) || negativeDiag.has(r - c)) {
                continue;
            }
            // else, try adding the queen here
            col.add(c);
            negativeDiag.add(r - c);
            positiveDiag.add(r + c);

            // go to next row
            dfs(r+1);

            // BACKTRACK
            col.delete(c);
            negativeDiag.delete(r - c);
            positiveDiag.delete(r + c);
        }
    }

    dfs(0);
    return count;
}