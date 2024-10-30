// https://leetcode.com/problems/find-k-closest-elements/

/*
    An integer a is closer to x than an integer b if:

    |a - x| < |b - x|, or
    |a - x| == |b - x| and a < b


    Binary search approach

    binary search to find the closest element in the array (such that the difference with x is minimum).
    let the index of the closest element to x be i
    then use sliding window from l = i and r = i, expanding to both sides, such that (r - l + 1) < k 
    and: 
        let leftDiff = Math.abs(arr[l-1] - x), rightDiff = Math.abs(arr[r+1] - x)
        if(leftDiff <= rightDiff), decrement l (increase window from left), l--
        else increase window from right, r++
*/

export function findClosestElements(arr, k, x) {
    let closestIndex = 0;
    let smallestDiff = Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(Math.abs(arr[i] - x) < smallestDiff) {   // only if subsequent elements have a smaller difference, for equal diff, dont update
            smallestDiff = Math.abs(arr[i] - x);
            closestIndex = i;
        }
    }
    // set bounds for window
    let l = closestIndex;
    let r = closestIndex;
    while((r - l + 1) < k) {
        const leftDiff = l > 0 ? Math.abs(arr[l-1] - x) : Infinity;
        const rightDiff = r < arr.length - 1 ? Math.abs(arr[r+1] - x) : Infinity;
        if(leftDiff <= rightDiff) {
            l--;
        } else {
            r++;
        }
    }
    return arr.slice(l, r+1);
}