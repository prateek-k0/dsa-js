/*
    Find duplicate with binary search

    https://leetcode.com/problems/find-the-duplicate-number

    since the number lies in the range 1...n, we binary search over the number space from 1 to n, and count the number of elements smaller than m. If count > m, then it is in the left half, else in the right half

    full solution: 
    https://leetcode.com/problems/find-the-duplicate-number/solutions/1892921/9-approaches-count-hash-in-place-marked-sort-binary-search-bit-mask-fast-slow-pointers/
*/ 

function countSmaller(arr, m) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= m) count++;
    }
    return count;
}

export function findDuplicate(arr) {
    let l = 1;
    let r = arr.length - 1;
    let m = 1;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(countSmaller(m) > m) {
            r = m - 1;  // go to left half
        } else {
            l = m + 1;  // go to right half
        }
    }
    return l;
}