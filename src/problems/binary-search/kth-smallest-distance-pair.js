/*
    Find k-th smallest pair distance

    The distance of a pair of integers a and b is defined as the absolute difference between a and b.

    Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

    binary search on all possible distances
    min distance = 0;
    max distance = max - min;

    since we need to find kth smallest distance, we need to see how many pairs have distance between them lower than m, we can simply use sorted array with sliding window to see how many pairs have distance beteen neighbouring elements < m. We can use sliding window for this

    https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5632765/o-n-log-n-n-log-w-binary-search-sliding-window-java-c-python-go-rust-javascript/
*/
function countPairsLessThanDistance(arr, distance) {
    let l = 0;
    let pairs = 0;
    for(let r = 1; r < arr.length; r++) {
        while(l < r && arr[r] - arr[l] > distance) {
            l++;
        }
        pairs += (r - l);    // number of pairs from l to r = pairs[l...l+1] + pairs[l...l+2] + ... + pairs[l...r-1];
    }
    return pairs;
}

export function kthSmallestDistance(arr, k) {
    arr.sort((a, b) => a - b);
    let l = 0;
    let r = arr[arr.length - 1] - arr[0];
    let m = 0;
    let res = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(countPairsLessThanDistance(arr, m) >= k) {
            res = m;
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res;
}