// https://leetcode.com/problems/matrix-block-sum/description/

/*
    similar to range-sum-query-2d, but we have to calculate the start and end coords
*/

export function matrixBlockSum(matrix, k) {
    let m = matrix.length;
    let n = matrix[0].length;
    const prefixMatrix = new Array(m+1).fill(0);
    for(let i = 0; i < m+1; i++) {
        prefixMatrix[i] = new Array(n+1).fill(0);
    }
    // initialize 1st row and 1st col
    for(let i = 0; i < m+1; i++) {
        prefixMatrix[i][0] = 0;
    }
    for(let i = 0; i < n+1; i++) {
        prefixMatrix[0][i] = 0;
    }
    // store sum for the rest of the matrix
    for(let i = 1; i < m+1; i++) {
        for(let j = 1; j < n+1; j++) {
            prefixMatrix[i][j] = prefixMatrix[i-1][j] + prefixMatrix[i][j-1] - prefixMatrix[i-1][j-1] + matrix[i-1][j-1];
        }
    }
    // initialize result matrix
    const result = new Array(m).fill(0);
    for(let i = 0; i < m; i++) {
        result[i] = new Array(n).fill(0);
    }
    // calculate result
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const r1 = Math.max(i - k, 0);
            const c1 = Math.max(j - k, 0);
            const r2 = Math.min(i + k + 1, m);
            const c2 = Math.min(j + k + 1, n);
            result[i][j] = prefixMatrix[r2][c2] - prefixMatrix[r1][c2] - prefixMatrix[r2][c1] + prefixMatrix[r1][c1];
        }
    }
    return result;
}