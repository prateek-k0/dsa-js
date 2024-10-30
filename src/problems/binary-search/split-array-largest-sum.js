/*
    Split array largest sum

    https://leetcode.com/problems/split-array-largest-sum/description/

    solution: https://leetcode.com/problems/split-array-largest-sum/solutions/987209/intuition-around-the-binary-search-approach/

    Given an integer array nums and an integer k, split nums into k non-empty subarrays such that 
    the largest sum of any subarray is minimized.
    Return the minimized largest sum of the split.
    A subarray is a contiguous part of the array.

    try: 
        binary seach over all sum space for each subarray, and see if number of segments is === k
        min sum for a subarray segment = max element
        max sum for a subarray segment = sum of all elements
*/

function countNumberOfSegmentsWithSum(arr, target) {
    let segmentCount = 1;
    let currentSum = 0;
    let currentStart = 0;
    for(let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if(currentSum > target) {
            console.log(arr.slice(currentStart, i));
            currentSum = arr[i];
            currentStart = i;
            segmentCount++;
        }
    }
    return segmentCount;
}

export function splitArrayLargestSum(arr, k) {
    let l = Math.max(...arr);   // minimum possible max sum of a segment
    let r = arr.reduce((a, c) => a + c);    // max sum is when there is only 1 segment, with all elements
    let m = l;
    let res = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(countNumberOfSegmentsWithSum(arr, m) <= k) { // number of parts is less or equal, then reduce the sum
            r = m-1;
            res = m;
        } else {
            l = m+1;
        }
    }
    return res;
}