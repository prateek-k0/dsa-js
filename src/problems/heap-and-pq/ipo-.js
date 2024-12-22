// https://leetcode.com/problems/ipo/description/
import { MinPriorityQueue, MaxPriorityQueue } from "datastructures-js";

export function ipo(k, w, profits, capital) {
    // both heaps will contain elements as [capital[i], profits[i]]
    const maxHeap = new MaxPriorityQueue((v) => v[1]);  // store with profit as priority, max first
    const minHeap = new MinPriorityQueue((v) => v[0]);  // store with capital as priority, min first
    for (let i = 0; i < profits.length; i++) {
        maxHeap.enqueue([capital[i], profits[i]]);
    }
    let kc = 0;
    let maxCapital = w;
    while (kc < k) {
        while (maxHeap.isEmpty() === false && maxHeap.front()[0] > w) {
            const frontMax = maxHeap.dequeue();
            minHeap.enqueue(frontMax);
        }
        if (maxHeap.isEmpty() === true) break;
        // else
        const front = maxHeap.dequeue();
        w += front[1];
        maxCapital = Math.max(maxCapital, w);
        kc++;
        while (minHeap.isEmpty() === false && minHeap.front()[0] <= w) {
            const frontMin = minHeap.dequeue();
            maxHeap.enqueue(frontMin);
        }
    }
    return maxCapital;
}