// https://leetcode.com/problems/spiral-matrix/description/

export function spiralOrder(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0;
    let right = n-1;
    let bottom = m-1;
    let left = 0;
    let sequence = [];
    while(sequence.length < m * n) {
        // get the top row
        for(let c = left; c <= right; c++) {
            console.log('top', matrix[top][c])
            sequence.push(matrix[top][c]);
        }
        top++;
        // get right column
        for(let r = top; r <= bottom; r++) {
            console.log('right', matrix[r][right])
            sequence.push(matrix[r][right]);
        }
        right--;
        // get bottom row
        if(top <= bottom) {
            for(let c = right; c >= left; c--) {
                console.log('bottom', matrix[bottom][c])
                sequence.push(matrix[bottom][c]);
            }
            bottom--;
        }
        // get left column
        if(left <= right) {
            for(let r = bottom; r >= top; r--) {
                console.log('left', matrix[r][left])
                sequence.push(matrix[r][left]);
            }
            left++;
        }
    }
    return sequence;
}