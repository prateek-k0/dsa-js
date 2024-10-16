/*
    Quick Sort
    A divide and conquer strategy, that chooses a pivot in the array, moves all elements smaller than the pivot to its left and greater to its right, and then recursively rearrange arr[l...pivot - 1] and arr[pivot + 1...r]
    
    Complexity: Average O(n), Worst Case O(n^2);

    Unstable Sort

    https://www.youtube.com/watch?v=v-1EGgaTFuw&ab_channel=AlgorithmswithAttitude
*/

/**
 * 
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 * @returns {number} 
 */

function partition(arr, l, r) {
    // generally, we need to optimize choosing the pivot element, more in the linked video,
    // for now, just use the last element as pivot
    const pivot = r; // pivot index is r;
    // partition is l...i, i+1...r, i is position of the new pivot
    let i = l;
    for(let j = l; j <= r; j++) {   // iterate j from l to r;
        if(arr[j] < arr[pivot]) {   // if element is less than pivot, swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;    // increase size of the partition
        }
    }
    // pivot's new position is i
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
}
/**
 * 
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 * @returns {void} 
 */
export function quicksort(arr, l = 0, r = arr.length - 1) {
    if(l < r) { // if partition size is 1, then ignore, since array with 1 element is already sorted
        const pivot = partition(arr, l, r);
        quicksort(arr, l, pivot - 1);   // rearrange left partition
        quicksort(arr, pivot + 1, r);   // rearrange right partition
    }
}