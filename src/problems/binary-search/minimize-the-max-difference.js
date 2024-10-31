// https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/

/*
    This can be solved using binary search over a all possible values of differences.
    since arr[i] <= 1e9, differences = 0...1e9;
    
    to find the number of pairs with difference <= m, we would sort the array and compare 2 consecutive elements at once (since for consecutive elements in a sorted array, the difference is smaller)

    since we also cannot use an index twice, if a pair is found with difference <= m, we increment the pointer by 2, else we increment the pointer by 1
*/

export function minimizeTheMaxDifference(arr, p) {
    arr.sort((a, b) => a - b);
    let l = 0;  // min diff, when 2 elements are same
    let r = 1e9;    // when 1 element is - and other is 1e9'
    let m = 0;
    let ans = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(countPairsWithLowerOrEqualDiff(arr, m) >= p) {
            ans = m;    // even if number of pairs are exactly p, move left, since we need to minimizze the diff
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return ans;
}

function countPairsWithLowerOrEqualDiff(arr, maxDiff) {
    let pairCount = 0;
    let i = 0;
    while(i < arr.length) {
        const currDiff = (arr[i+1] ?? Infinity) - arr[i];
        if(currDiff <= maxDiff) {
            pairCount++;
            i += 2; // since we cant use both these indices again
        } else {
            i++;
        }
    }
    return pairCount;
}