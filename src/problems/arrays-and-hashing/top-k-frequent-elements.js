// top k frequent elements
/*
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

    There are 2 ways to solve this: 

    1. Priority Queue / Heap sort: make a max heap of size k, Time complexity: O(n + klogk);
    2. quick Select : quick select algorithm to pick k topmost elements;

    https://leetcode.com/problems/top-k-frequent-elements/
*/

function partition(arr, l, r) {
    const pivot = r;
    let i = l;
    for(let j = l; j <= r; j++) {
        if(arr[j][1] > arr[pivot][1]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
}

function quickSelect(arr, k) {
    if(k >= arr.length) return arr;
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        const pivot = partition(arr, l, r);
        if(k === pivot) return arr.slice(0, pivot);
        else if(k < pivot) r = pivot - 1;
        else l = pivot + 1;
    }
    // if l === r
    return arr.slice(0, l);
}

export function topKFrequent(arr, k) {
    const occurrences = {}; // to store the occurrences of each element
    arr.forEach((element) => {
        occurrences[element] = (occurrences[element] ?? 0) + 1;
    });
    const frequencies = Object.entries(occurrences);
    const topKFrequencies = quickSelect(frequencies, k);
    return topKFrequencies.map(([key, val]) => +key);
}