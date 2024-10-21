import { MaxPriorityQueue } from 'datastructures-js';

export function lastStoneWeight (stones) {
    const pq = new MaxPriorityQueue();
    stones.forEach((stone) => {
        pq.enqueue(stone);
    });
    while(pq.size() >= 2) {
        const stone1 = pq.dequeue().element;
        const stone2 = pq.dequeue().element;
        const diff = stone1 - stone2;
        if(diff > 0) pq.enqueue(diff);  // enqueue the difference only if the stones are not destroyed
    }
    return pq.front()?.element ?? 0;
};