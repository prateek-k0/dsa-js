// https://leetcode.com/problems/set-matrix-zeroes/

export function setMatrixZeros(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    const rowsToSet0 = new Set();
    const colsToSet0 = new Set();
    // traverse the matrix and check rows and colums which has a 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                rowsToSet0.add(i);
                colsToSet0.add(j);
            }
        }
    }
    // set rows to 0
    for(const r of rowsToSet0.keys()) {
        for(let c = 0; c < n; c++) {
            matrix[r][c] = 0;
        }
    }
    // set cols to 0
    for(const c of colsToSet0.keys()) {
        for(let r = 0; r < m; r++) {
            matrix[r][c] = 0;
        }
    }
}