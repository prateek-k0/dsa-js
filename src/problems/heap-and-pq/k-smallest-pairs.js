// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/

import { MinPriorityQueue } from "datastructures-js";

// heap method

/*
    form all pairs and put it into the heap

    instead of pushing all pairs into heap at once (which could take o(n^2 * log(n)), since there are n^2 pairs formed, we first put pairs with elements of arr1 and only the first element from arr2 (number of pairs would be arr1.length). Then we start popping one from the heap, and push another pair such that it has the same index in arr1, but its next index in arr2.

    so, for ex, if the popped pair from arr1 is [arr1[i1], arr2[i2]], then we put in heap [arr1[i1], arr2[i2 + 1]];

    it is guaranteed that the smallest pair will always be [arr1[0], arr2[0]], since the array is sorted
*/

export function kSmallestPairs(arr1, arr2, k) {
    const minHeap = new MinPriorityQueue((val) => val[0]);
    for(let i = 0; i < arr1.length; i++) {
        minHeap.enqueue([arr1[i] + arr2[0], i, 0]); // push all elements from arr1 paired with arr2[0] into the heap
    }
    const pairs = [];
    while(pairs.length < k && minHeap.isEmpty() === false) {
        const [sum, i1, i2] = minHeap.dequeue();
        pairs.push([arr1[i1], arr2[i2]]);
        if(i2 < arr2.length - 1) {
            minHeap.enqueue([arr1[i1] + arr2[i2 + 1], i1, i2 + 1]); // push the same element from arr1 paired with the next element from arr2
        }
    }
    return pairs;
}