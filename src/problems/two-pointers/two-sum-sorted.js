/*
    Two sum in sorted array
    https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

    Since the array is sorted, we can use 2 pointers
*/

export function twoSumSorted(arr, targetSum) {
    let l = 0;
    let r = arr.length - 1;
    let res = [-1, -1];
    while(l < r) {  // l must not be equal to r
        if(arr[l] + arr[r] === targetSum) { // if sum is equal, we have the solution
            res = [l+1, r+1];
            break;
        } else if(arr[l] + arr[r] < targetSum) {    // if sum smaller than target, increment left pointer
            l++;
        } else {    // if sum is greater then target, decrement right pointer
            r--;
        }
    }
    return res;
}