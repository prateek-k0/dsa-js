// https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/description/

import { MinPriorityQueue } from "datastructures-js";

/*
    similar to k-smallest-pairs, we need to do it for all rows
*/

export function kthSmallestSumOfMatrix(matrix, k) {
    let m = matrix.length;
    // base condition, only 1 row
    if(m === 1) return matrix[0][k-1];
    // for other, row by row 
    // let ans = orderedPairSum(matrix[0], matrix[1]);
    // for(let i = 2; i < m; i++) {
    //     ans = orderedPairSum(ans, matrix[i]);
    // }
    // return ans;
    // divide and conquer
    const ans = divideAndConquer(matrix, 0, m-1, k);
    return ans[k-1];    // k is 1 indexed;
}

function divideAndConquer(matrix, l, r, k) {    // like merge sort's divide
    if(l < r) {
        let m = Math.floor((l + r) / 2);
        const leftSum = divideAndConquer(matrix, l, m, k);
        const rightSum = divideAndConquer(matrix, m+1, r, k);
        return kSmallestPairSum(leftSum, rightSum, k);
    } else {
        return matrix[l];
    }
}

function kSmallestPairSum(arr1, arr2, k) { 
    const minHeap = new MinPriorityQueue((val) => val[0]);
    for(let i = 0; i < arr1.length; i++) {
        minHeap.enqueue([arr1[i] + arr2[0], i, 0]); // push all elements from arr1 paired with arr2[0] into the heap
    }
    let ans = [];
    while(ans.length < k && minHeap.isEmpty() === false) {
        const [sum, i1, i2] = minHeap.dequeue();
        ans.push(sum);  // push sum instead of indices
        if(i2 < arr2.length - 1) {
            minHeap.enqueue([arr1[i1] + arr2[i2+1], i1, i2 + 1]);
        }
    }
    return ans;
}