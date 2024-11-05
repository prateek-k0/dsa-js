// https://leetcode.com/problems/range-sum-query-2d-immutable/description/

export class RangeSumQuery2D {
    matrix = [];
    prefixMatrix = [];
    constructor(matrix) {
        this.matrix = matrix;
        let m = matrix.length;
        let n = matrix[0].length;
        this.prefixMatrix = new Array(m+1).fill(null);
        for(let i = 0; i < m+1; i++) {
            this.prefixMatrix[i] = new Array(n+1).fill(0);
        }
        this.generatePrefixSum();
    }
    generatePrefixSum() {
        let m = this.prefixMatrix.length;
        let n = this.prefixMatrix[0].length;
        // set prefix[i][0] as 0 (1st col)
        for(let i = 0; i < m; i++) {
            this.prefixMatrix[i][0] = 0;
        }
        // set prefix[0][i] as 0 (1st row)
        for(let i = 0; i < n; i++) {
            this.prefixMatrix[0][i] = 0;
        }
        // for the rest of the matrix
        for(let i = 1; i < m; i++) {
            for(let j = 1; j < n; j++) {
                this.prefixMatrix[i][j] = this.prefixMatrix[i-1][j] + this.prefixMatrix[i][j-1] - this.prefixMatrix[i-1][j-1] + this.matrix[i-1][j-1];
            }
        }
        console.log(this.prefixMatrix);
    }
    sumRegion(r1, c1, r2, c2) {
        // draw the matrix to understand
        return this.prefixMatrix[r2 + 1][c2 + 1] - this.prefixMatrix[r2 + 1][c1] - this.prefixMatrix[r1][c2 + 1] + this.prefixMatrix[r1][c1];
    }
}