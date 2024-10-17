/*
    Find minimum in rotated sorted array
    https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

    for a rotated sorted array, compare it with the last or the first element
    the minimum index in a rotated sorted array is its pivot
    if arr[mid] > arr[arr.length - 1], then pivot is after mid, 
    if arr[mid] <= arr[arr.length - 1], then pivot is before mid
    the pivot is always at l, ie,
    the min element is at l, max element is at l - 1, (or, if l === 0, max is the last element);
*/

export function minimumInRotated(arr) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] > arr[arr.length - 1]) {  // arr[mid] > last element, pivot is in the right subarray
            l = m+1;
        } else {    // arr[mid] <= last element, pivot is in the left subarray
            r = m-1;
        }
    }
    return arr[l];  // since the min element is always at l
}