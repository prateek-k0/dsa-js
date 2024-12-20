// https://leetcode.com/problems/minimum-interval-to-include-each-queries/description/

import { MinPriorityQueue } from "datastructures-js";

/*
    We first sort both the intervals and queries array (only a copy of queries array)
    Then for each query, 
        - we first discard all intervals from intervals array that end before the current query
        it is guaranteed that these intervals will NOT contain any query later, since both
        queries and intervals are sorted
        - then, we put all intervals into the PQ that start before or 
        at the same point as the current query
        - then we remove all the intervals from PQ that are outside (ending before current query).
        - then, what we have in the PQ at the front is the smallest interval that contains the
        current query, since PQ uses the interval size as the priority.
        - if its empty, its -1
*/

// slower version - due to using shift operation on arrays
export function minIntervalToIncludeQuery(intervals, queries) {
    // sort intervals according to their start times for efficient traversals
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    // PQ to store intervals according to sizes
    const minPQ = new MinPriorityQueue(([start, end]) => end - start + 1);  // size of the query = end - start + 1
    // since we are changing the order due to sorting of queries, store them in a map for retrieval
    const queryRes = {}
    // sort all queries before processing
    const queriesSorted = [...queries].sort((a, b) => a - b);
    // process queries
    for (const q of queriesSorted) {
        // remove those intervals from the queue which are before the current query
        // it is guranteed that these queries removed will not be used by later elements,
        // since both queries and intervals are sorted
        // intervals[0][1] < q implies that the interval at the front lies before current query
        while (intervals.length > 0 && intervals[0][1] < q) {
            intervals.shift();
        }
        // now we have intervals that may contain the query
        // if the intervals at the front contain the query, put them in PQ
        while (intervals.length > 0 && (intervals[0][0] <= q && q <= intervals[0][1])) {
            const firstInterval = intervals.shift();
            // only put those intervals in the PQ that contain the query
            minPQ.enqueue(firstInterval);
        }
        // remove intervals from PQ that don't contain the query
        while (minPQ.isEmpty() === false && minPQ.front()[1] < q) {
            minPQ.dequeue();
        }
        // now, since we have intervals in PQ that contain the query, get its top
        // that means, if PQ is empty, query cannot be contained by given intervals
        if (minPQ.isEmpty() === false) {
            const [frontStart, frontEnd] = minPQ.front();
            queryRes[q] = frontEnd - frontStart + 1;
        } else {    // query cant be contained
            queryRes[q] = -1;
        }
    }

    return queries.map((q) => queryRes[q]);
}



// faster version - instead of having to remove intervals from intervals array
//  that are before current query, we simply maintain a pointer and increment it
// that behaves like intervals[pointer] === intervals[0];
var minInterval = function (intervals, queries) {
    // sort intervals according to their start times for efficient traversals
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    // PQ to store intervals according to sizes
    const minPQ = new MinPriorityQueue(([start, end]) => end - start + 1);  // size of the query = end - start + 1
    // since we are changing the order due to sorting of queries, store them in a map for retrieval
    const queryRes = {}
    // sort all queries before processing
    const queriesSorted = [...queries].sort((a, b) => a - b);
    // maintain a pointer to discard intervals before current query
    let pointer = 0;
    // process queries
    for (const q of queriesSorted) {
        // if already computed
        if (queryRes[q]) continue;
        // remove those intervals from the queue which are before the current query
        // it is guranteed that these queries removed will not be used by later elements,
        // since both queries and intervals are sorted
        // instead of intervals.shift(), which is expensive, we can simply increment the pointer
        while (pointer < intervals.length && intervals[pointer][1] < q) {
            pointer++;
        }
        // now we have intervals that may contain the query
        // if the intervals at the front contain the query, put them in PQ
        // while(pointer < intervals.length && (intervals[pointer][0] <= q && q <= intervals[pointer][1])) {
        // only check if start is before or equal to current query, no need to check end
        while (pointer < intervals.length && (intervals[pointer][0] <= q && q <= intervals[pointer][1])) {
            const firstInterval = intervals[pointer];
            // only put those intervals in the PQ that contain the query
            minPQ.enqueue(firstInterval);
            // increment pointer, since we've added intervals[pointer] to PQ
            pointer++;
        }
        // remove intervals from PQ that don't contain the query
        while (minPQ.isEmpty() === false && minPQ.front()[1] < q) {
            minPQ.dequeue();
        }
        // now, since we have intervals in PQ that contain the query, get its top
        // that means, if PQ is empty, query cannot be contained by given intervals
        if (minPQ.isEmpty() === false) {
            const [frontStart, frontEnd] = minPQ.front();
            queryRes[q] = frontEnd - frontStart + 1;
        } else {    // query cant be contained
            queryRes[q] = -1;
        }
    }

    return queries.map((q) => queryRes[q]);
};