// https://leetcode.com/problems/find-median-from-data-stream/

import { MaxPriorityQueue, MinPriorityQueue } from "datastructures-js";

/*
    we maintain to pq:
    1: maxPriorityQueue (left) for element before median,
    2: minPrioritQueue (right) for elements after median and the median itself.

    median = if(n is odd), top of right min priority queue, else
    (top(max pq left) + top(min pq right)) / 2 

    if there are odd elements, min pq right must have 1 more element than max pq left
*/

export class MedianFinder {
    leftMaxPQ = new MaxPriorityQueue();
    rightMinPQ = new MinPriorityQueue();
    addNum(num) {
        if(this.rightMinPQ.isEmpty() || this.rightMinPQ.front().element < num) this.rightMinPQ.enqueue(num);
        else this.leftMaxPQ.enqueue(num);
        this.balanceHeaps();
    }
    // to make sure size of right heap === size of left heap or size of heap + 1
    balanceHeaps() {
        if(this.rightMinPQ.size() - this.leftMaxPQ.size() > 1) {
            this.leftMaxPQ.enqueue(this.rightMinPQ.dequeue().element);
        } else {
            if(this.leftMaxPQ.size() > this.rightMinPQ.size()) {
                this.rightMinPQ.enqueue(this.leftMaxPQ.dequeue().element);
            } 
        }
    }
    findMedian() {
        const size1 = this.leftMaxPQ.size();
        const size2 = this.rightMinPQ.size();
        if(size1 === size2) {
            const leftTop = this.leftMaxPQ.front().element;
            const rightTop = this.rightMinPQ.front().element;
            return (leftTop + rightTop) / 2;
        } else {
            return this.rightMinPQ.front().element;
        }
    }
}