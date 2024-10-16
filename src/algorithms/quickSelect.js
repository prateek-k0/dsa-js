/*
    Quick Select
    Used to find the kth top / bottom element(s) in unsorted array
    Similar to quickSort, only difference is that we only need to make recursion calls to one side, depending on the condition

    Time Complexity: O(n ^ 2) For worst case, O(n) average

    can be written recursively, or iteratively, since we need to make only one recursion call per iteration

    https://www.youtube.com/watch?v=ZAXSFph_L-A&ab_channel=TrulyUnderstandingAlgorithms

    partitioning algorithm: https://www.youtube.com/watch?v=v-1EGgaTFuw&ab_channel=AlgorithmswithAttitude
*/

// Problem statement: find kth largest element
// for kth largest, we need to write the partitioning algo such that it sorts descendingly

/**
 * 
 * @param {number[]} arr 
 * @param {number} l
 * @param {number} r
 * @returns {number}
 */

function partition(arr, l, r) {
    const pivot = r;   // last element;
    let i = l;
    for(let j = l; j <= r; j++) {
        if(arr[j] > arr[pivot]) { // descending
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} k
 * @param {number} l
 * @param {number} r
 * @returns {number}
 */

export function quickSelect(arr, k, l = 0, r = arr.length - 1) {
    if(k >= arr.length) return -1;  // base error condition
    if(l < r) { // only if partition size is greater than 1
        const pivot = partition(arr, l, r);
        if(k === pivot) return arr[pivot];  // if k === pivot, we've got the kth element
        if(k < pivot) { // if k < pivot, recurse to the left (smaller elements) partition
            return quickSelect(arr, k, l, pivot - 1);
        } else {    // if k > pivot, recurse to the right (greater elements) partition
            return quickSelect(arr, k, pivot + 1, r);
        }
    } else {
        return arr[l];
    }
}

// iterative method to write quickSelect
/**
 * 
 * @param {number[]} arr 
 * @param {number} k
 * @returns {number}
 */
export function quickSelectIterative(arr, k) {
    if(k >= arr.length) return -1;  // base error condition
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        const pivot = partition(arr, l, r);
        if(k === pivot) {   // if k === pivot, we've got the kth element
            return arr[pivot];
        } else if(k < pivot) {  // if k < pivot, decrearse r, like bin search
            r = pivot - 1;
        } else {    // if k > pivot, increase l, like bin search
            l = pivot + 1;
        }
    }
    return arr[l];  // encountered when l === r
}