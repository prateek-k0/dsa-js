// https://leetcode.com/problems/furthest-building-you-can-reach/

import { MinPriorityQueue } from "datastructures-js";

/*
    This problem can also be solved using priority queue only.

    For solving this program using binary search, we break down the problem as:
    if we can reach the end of the array by using a combo of bricks and ladders.
    so, we can use binary search over all possible lengths (0 to max length) to figure out
    what is the max length that can be reached with thr given amount of bricks and ladders.

    now, for finding if we can reach to the end, we first get the differences and store it in a 
    min - priority queue. we start picking the smallest differences for bricks, and largest ones
    for ladders.

    if at the end, we still have items left in the priority queue, then its not possible for this length,
    else its possible

    Time Complexity: log(n) for bin search and n*log(n) for checking if its possible.
    Therefore, total time complexity = O(log(n)*n*log(n));
*/

function checkIfReachesEnd(heights, bricks, ladders, len) {
    const pq = new MinPriorityQueue();
    // enqueue all differences upto the length
    for(let i = 0; i < len - 1; i++) {
        const diff = heights[i+1] - heights[i];
        if(diff <= 0) continue; // if previous is bigger, ignore
        // else
        pq.enqueue(diff);
    }
    // check all differences, use bricks until you cannot, and then use ladders
    // thats why we use a min-queue, to use bricks for smaller diffs
    while(pq.isEmpty() === false) {
        const frontDiff = pq.front();
        pq.dequeue();
        if(bricks >= frontDiff) {   // bricks can be used
            bricks -= frontDiff;
        } else {    // bricks exhausted
            if(ladders === 0) return false; // ladders also exhausted
            else {
                ladders--;  // use a ladder
            }
        }
    }
    // if at the end, pq is empty and all diffs are used, its possible to reach len
    return true;
}

export function furthestBuildingReached(heights, bricks, ladders) {
    let l = 0;
    let r = heights.length - 1;
    let m = 0;
    let res = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(checkIfReachesEnd(heights, bricks, ladders, m+1) === true) { // if its possible, try going right
            res = m;
            l = m+1;
        } else {    // not possible, go left
            r = m-1;
        }
    }
    return res;
}