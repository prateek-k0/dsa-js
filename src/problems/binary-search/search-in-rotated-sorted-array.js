/*
    Search in rotated sorted array
    first find the pivot, (minimum element of the array);
    now, compare the target element with the last element of the array,
    if it is greater, then bin search in [0, pivot - 1];
    else bin search in [pivot, array.length - 1];

    there is another way:

    check which half is sorted, if the sorted half contains the number, go to it, otherwise, go to the other half
*/

// function findPivot(arr, target)

export function searchInRotatedArray(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    let res = -1;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] === target) {
            res = m;
            break;
        }
        // check which half is sorted
        if(arr[l] <= arr[m]) {  // if left half is sorted
            if(arr[l] <= target && target <= arr[m]) {  // if left half contains element, go to it
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {    // if left half is not sorted, then right half must be sorted
            if(arr[m] <= target && target <= arr[r]) {  // if right half contains the element, go to it
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return res;
}