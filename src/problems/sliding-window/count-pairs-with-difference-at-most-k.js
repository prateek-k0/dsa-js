/*
    Count pairs in array with difference at most k

    Given an array, count the number of pairs in the array such that the difference between each pair is at most k.

    For this, we can first sort the array, to minimize the difference between neighbouring elements. Then using sliding window technique to calculate the pairs

    at any point within window [l...r], number of pairs in that window = r - l;
    we need to calculate number of pairs for all valid windows

    at most the max difference between pairs in a sorted array is max - min.
*/

export function countPairsWithDifferenceAtMostK(arr, k) {
    arr.sort((a, b) => a - b);  // ascending sort
    let pairs = 0;
    let l = 0;
    for(let r = 1; i < arr.length; i++) {
        // since array is sorted, we only check with max difference(arr[r] - arr[l]);
        while(l < r && arr[r] - arr[l] > k) {   // shrink window from left until max difference is <= k
            l++;
        }
        // add number of pairs of the current window to the total pairs
        // number of pairs in current window = r - 1;
        pairs += r - 1;
    }
    return pairs;
}