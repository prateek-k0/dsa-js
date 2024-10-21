import { MinPriorityQueue } from 'datastructures-js';

export class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();
        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i])
        }
    }

    add = (val) => {
        if (this.minHeap.size() < this.k) {
            this.minHeap.enqueue(val);
        }
        // val is greater than current top && minHeap size is at least k
        // restrict size of heap to k, to improve performance to o(klogk) per query, instead of o(nlogn)
        else {
            if ((this.minHeap.front()?.element || 0) < val) {
                this.minHeap.dequeue();
                this.minHeap.enqueue(val);
            }
        }
        return this.minHeap.front()?.element || 0;
    }
}