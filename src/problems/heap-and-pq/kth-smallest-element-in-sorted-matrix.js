// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/

import { MinPriorityQueue } from "datastructures-js";

// with pq

// export function kthSmallestInSortedMatrix(matrix, k) {
//     let n = matrix.length;  // square matrix 
//     let pq = new MinPriorityQueue((val) => val[0]); 
//     // put all the elemnts from the first column
//     for(let i = 0; i < n; i++) {
//         pq.enqueue([matrix[i][0], i, 0]);
//     }
//     let kCount = 0;
//     let kthElement = Infinity;
//     while(kCount < k && pq.size() > 0) {
//         const [element, row, col] = pq.dequeue();
//         kthElement = element;
//         if(col < n - 1) {
//             pq.enqueue([matrix[row][col+1], row, col+1]);
//         }
//         kCount++;
//     }
//     return kthElement;
// }

// another solution - BFS
// for every cell [r, c], its next bigger elements are either [r+1, c] or [r, c+1]
// so for every element thats removed from pq, enqueue its nearest next greatest neighnour

export function kthSmallestInSortedMatrix(matrix, k) {
    let n = matrix.length;  // square matrix 
    let pq = new MinPriorityQueue((val) => val[0]); 
    // enqueue the first element
    pq.enqueue([matrix[0][0], 0, 0]);
    let kCount = 0;
    let kthElement = Infinity;
    while(kCount < k && pq.size() > 0) {
        const [element, row, col] = pq.dequeue();
        kthElement = element;
        if(row < n - 1) {   // enqueue [r+1, c]
            pq.enqueue([matrix[row+1][col], row+1, col]);
            // make matrix[row+1, col] as Infinity, so that it cant be used again
            matrix[row+1][col] = Infinity;
        }
        if(col < n - 1) {   // enqueue [r, c+1]
            pq.enqueue([matrix[row][col+1], row, col+1]);
            // make matrix[row, col+1] as Infinity, so that it cant be used again
            matrix[row][col+1] = Infinity;
        }
        kCount++;
    }
    return kthElement;
}