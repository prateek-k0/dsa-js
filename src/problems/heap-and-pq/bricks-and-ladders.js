// https://leetcode.com/problems/furthest-building-you-can-reach/

/*
    In this problem, we can see for that, only for the largest of differences, we must use ladders.

    We can use this property to solve the problem greedily.
    We can iterate from start to finish, and for each pair which has height of the previous building that has a lower height than the next building, we use bricks to climb climb to the next building. and push the difference in a max priority queue PQ.
    
    PQ stores the differences that use bricks, maxPriorityQueue

    When all bricks will be exhausted, then
    - check if the difference is less than the difference at the top, if it is, then remove the top difference (d-min), increment bricks by d-min, and decrement ladders. Its equivalent to using a ladder instead of bricks.
    - if difference at the top is greater, then we have no choice but to use the ladder.
*/

import { MaxPriorityQueue } from "datastructures-js";

export function furthestBuildingReached(heights, bricks, ladders) {
    const n = heights.length;
    const pq = new MaxPriorityQueue();  // priority queue that stores the differences that uses bricks
    let i = 0;  // to see whats the furthest building that could be reached
    for (; i < n - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff <= 0) continue; // if next building is smaller, ignore
        else {
            if (bricks >= diff) {    // if there are enough bricks, use them
                bricks -= diff;
                pq.enqueue(diff);
            } else {    // not enough bricks, check if a ladder can be used by un-using some bricks
                if (ladders > 0) {
                    const diffMax = pq.front(); // max diff where bricks were used
                    if (pq.isEmpty() === false && diff < diffMax) {    // if the max difference where bricks were used is larger than current diff, then use ladder instad
                        pq.dequeue();
                        bricks += diffMax;  // un-use the bricks by min difference seen before
                        bricks -= diff; // use the bricks for current diff
                        ladders--; // use the ladder for the previous pair, where difference is diffMax
                        pq.enqueue(diff);   // insert into PQ where we have used bricks, thats this pair
                    } else {    // simply use ladder.
                        ladders--;
                    }
                } else {
                    break;   // neither bricks nor ladders, can't go further
                }
            }
        }
    }
    return i;
}