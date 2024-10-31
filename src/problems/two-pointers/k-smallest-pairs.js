// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/

/*
    both the arrays are sorted
    bin search over all possible sum values
    min sum = arr1[0] + arr2[0];
    max sum = arr1[arr1.length - 1] + arr2[arr2.length - 1];
    on each bin search iteration, check if the count of pairs with sum < m, if its less than k, increase sum, (move right)
    else decrease sum (move left)
*/

export function kSmallestPairs(arr1, arr2, k) {
    let l = arr1[0] + arr2[0];  // min sum
    let r = arr1[arr1.length - 1] + arr2[arr2.length - 1];  // max sum
    let m = l;
    let res = 0;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (countPairsLessThanSum(arr1, arr2, m) >= k) {    // if pairs are more or equal to k, then reduce the sum, move left
            res = m;
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return getPairsLessThanSum(arr1, arr2, res, k);
}

// same as kth smallest in sorted matrix, 2-pointers
function countPairsLessThanSum(arr1, arr2, targetSum) {
    let count = 0;
    for (let i = 0, j = arr2.length - 1; i < arr1.length; i++) {
        while (j >= 0 && arr1[i] + arr2[j] > targetSum) {
            j--;
        }
        count += (j + 1);
    }
    return count;
}

// 2 pointer approach to count pairs with sum <= targetSum
function getPairsLessThanSum(arr1, arr2, targetSum, targetSize) {
    const pairs = [];
    const equalSumPairs = [];
    let i = 0;
    let j = arr2.length - 1;
    while (i < arr1.length && j > -1) {
        if (arr1[i] + arr2[j] <= targetSum) {    // if sum <= targetSum, check for all pairs with indices previous to j
            for (let k = 0; k <= j; k++) {
                if (arr1[i] + arr2[k] < targetSum) { // for sum < targetSum
                    pairs.push([arr1[i], arr2[k]]);
                } else {    // for sum === targetSum
                    equalSumPairs.push([arr1[i], arr2[k]]); // push in the extra list
                }
            }
            i += 1;
        } else {
            j -= 1;
        }
    }
    // if list with smaller sum is of inadequate length, append elements from the extra list
    if (pairs.length >= targetSize) return pairs;
    else {
        let start = 0;
        while (pairs.length < targetSize) {
            pairs.push(equalSumPairs[start]);
            start++;
        }
        return pairs;
    }
}