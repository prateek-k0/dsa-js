// https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/description/

import { MinPriorityQueue } from "datastructures-js";

/*
    solution explanation: bin search + dfs
    https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/610701/c-java-python-binary-search-o-m-k-log-m-5000-minheap-o-m-k-logk-solutions/

    we can bin search over all possible sums, and see how many arrays have sum <= m,

    since elements can be of range 1-5000, sum can be in range of m * 1 and m * 5000;
*/

export function kthSmallestSumOfMatrix(matrix, k) {
    let m = matrix.length;
    let l = m;
    let r = m * 5000;
    let mid = l;
    let ans = l;
    while(l <= r) {
        mid = Math.floor((l + r) / 2);
        if(countArrayWithSumLessOrEqual(matrix, 0, 0, mid, k) >= k) {
            r = mid - 1;
            ans = mid;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

function countArrayWithSumLessOrEqual(matrix, row, currentSum, targetSum, maxSize) {
    if(currentSum > targetSum) return 0;    // base failure condition
    else if(row === matrix.length) return 1;    // base success condition
    let sum = 0;
    for(let c = 0; c < matrix[0].length; c++) { // iterate for all columns, element from the current row
        let currSum = countArrayWithSumLessOrEqual(matrix, row+1, currentSum + matrix[row][c], targetSum, maxSize);
        if(currSum === 0) break;    // if returned 0, check with next row
        sum += currSum;
        if(sum > maxSize) break;    // pruning: if size is already greater than k, return
    }
    return sum;
}