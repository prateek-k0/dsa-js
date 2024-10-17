/*
    https://leetcode.com/problems/search-a-2d-matrix/description/

    Search in a row-column sorted matrix

    first we can bisect-right on the first elements of the row (the first column), then bin-search on that row of the matrix
*/

function bisectRight(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    let ans = -1;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] <= target) {
            l = m+1;
            ans = m;
        } else {
            r = m - 1;
        }
    }
    return ans;
}

export function matrixSearch(matrix, target) {
    // first find the appropriate row number
    const firstColumn = matrix.map((r) => r[0]);
    const row = bisectRight(firstColumn, target);
    if(row === -1) return false;
    // then see if target exists in that column
    let l = 0;
    let r = matrix[row].length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(matrix[row][m] === target) return true;
        if(matrix[row][m] > target) r = m - 1;
        else l = m + 1;
    }
    return false;
}

