// https://leetcode.com/problems/binary-search/description/

export function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);    // get the mid
        if(arr[m] === target) return m; // if the arr[mid] === target, return it
        if(arr[m] > target) r = m-1;    // if arr[mid] > target, shrink scope from right side, r = m-1;
        else l = m+1;  // if arr[mid] < target, shrink scope from left, l = m+1;
    }
    return -1;
}