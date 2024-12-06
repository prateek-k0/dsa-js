// https://leetcode.com/problems/rotate-image/

export function rotateMatrix(matrix) {
    const n = matrix.length;    // n x n matrix
    // 1. transpose
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // 2. reverse each row
    matrix.forEach((row, r) => {
        // reverse each row
        for(let i = 0; i < Math.floor(n / 2); i++) {
            [matrix[r][i], matrix[r][n - i - 1]] = [matrix[r][n - i - 1], matrix[r][i]];
        }
    });
}