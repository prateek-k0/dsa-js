/*
    Sliding window maximum
    https://leetcode.com/problems/sliding-window-maximum/description/

    we can use 2 approaches for this: 

    1. priority queue: for each window
    2. doubly ended queue

    for doubly ended queue, 
    for each window,
    1. check if the there are elements that are before this window from the front of the dequeue, if there are, remove them from the front
    2. before inserting element in the rear of the dequeue, check if it has smaller element than the current one, if there are, remove them from the rear
    3. to accomodate both the above conditions, store items in the dequeue along with its index in the input array, such as [arr[i], i];
    4. new elements must always be inserted from the rear, elements from previous windows must always br removed from the front;
    5. max of each window is the first element in the dequeue from the front, ie dequeue[0];
*/

export function slidingWindowMaximum(arr, k) {
    const dequeue = [];
    // for first window
    const res = [];
    for(let i = 0; i < k; i++) {
        // pop elements from the rear which are smaller than current element
        while(dequeue.length > 0 && dequeue[dequeue.length - 1][0] < arr[i]) {
            dequeue.pop();
        }
        dequeue.push([arr[i], i]);
    }
    // max for the window is always stored at the front;
    res.push(dequeue[0][0]);
    // for subsequent windows
    for(let i = 1; i < arr.length - k + 1; i++) {
        // remove elements which are out of this window from the front
        while(dequeue.length > 0 && dequeue[0][1] < i) {
            dequeue.shift();
        }
        // pop elements from the rear which are smaller than current element
        while(dequeue.length > 0 && dequeue[dequeue.length - 1][0] < arr[i+k-1]) {
            dequeue.pop();
        }
        dequeue.push([arr[i+k-1], i+k-1]);
         // max for the window is always stored at the front;
        res.push(dequeue[0][0]);
    }
    return res;
}