// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/*
    We could use a heap for this, but we have a 2-poinet + binary search, since the matrix is sorted

    for binary search, l = matrix[0][0] and r = matrix[size - 1][size - 1], size = matrix.length;
    matrix is a square matrix

    for each m, if (count of elements in matrix <= m) is >= k, move left, since we need to find the smallest num
    else move right

    to count elements less than or equal to m, we use the 2 pointer approach

    let row = 0;
    let col = size - 1;
    for each row, since the matrix is row-col sorted, matrix[row][col] <= matrix[row + 1][col]
*/

export function kthSmallestMatrix(matrix, k) {
    let size = matrix.length;   // square matrix
    let l = matrix[0][0];   // smallest element in the matrix
    let r = matrix[size - 1][size - 1]; // greatest element in the matrix
    let m = matrix[0][0];
    let ans = -1;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(countLessOrEqual(matrix, size, m) >= k) {
            ans = m;
            r = m - 1;  // even if k is equal to count, we move left, since we need to find the smallest such elemene
        } else {
            l = m + 1;
        }
    }
    return ans;
}

function countLessOrEqual(matrix, size, m) {
    let row = 0;    // pointer 1
    let col = size - 1; // pointer 2;
    let count = 0;
    for(; row < size; row++) {
        while(col >= 0 && matrix[row][col] > m) {
            col --; 
        }
        count += (col + 1); // add col+1, since col is 0-indexed
        // dont update col to size - 1, since the matrix is row-col sorted, matrix[row][col] <= matrix[row + 1][col]
    }
    return count;
}