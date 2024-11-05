// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/

/*
    The array can be divided into 3 parts: prefix, extra, suffix
    x can be thought as prefix sum till some index (lets say, i) + suffix sum from index (lets say, j)
    the "extra" elements, are the elements that are not considered a part of this operation

    for example: [3,2,20,1,1,3], x = 10
    there is only one solution here: remove 3, 2 from front and 1, 1, 3 from the rear
    so, the array can be divided as 
    prefix: 3, 2
    suffix: 1, 1, 3
    extra: 20

    we can now reprhase the problem like: find minimum length of prefix + suffix

    to decrease the length of prefix + suffix, we need to maximize extra length;

    so now the problem is simply to find the maximum length of extra elements.

    prefix of extra elements = sum of all elements - x

    REMEMBER: the array does not contain negative numbers
*/

export function minOperationsToReduceXToZero(nums, x) {
    let n = nums.length;
    let prefixSumArr = new Array(n+1).fill(0); // exclusive prefix sum, ie, prefix[i] = prefix[i-1] + arr[i-1]
    for(let i = 1; i < n + 1; i++) {
        prefixSumArr[i] = prefixSumArr[i-1] + nums[i-1];
    }
    // base condition, since there are no negative elements, if total sum === x, return n
    if(prefixSumArr[n] === x) return n;
    const extraSum = prefixSumArr[n] - x;
    console.log(prefixSumArr, extraSum);
    let ans = -1;
    // use sliding window to findout maximum subarray length
    let maxLen = 0;
    let l = 0;
    for(let r = 1; r < n + 1; r++) {
        while(l < r && prefixSumArr[r] - prefixSumArr[l] > extraSum) {
            l++;
        }
        if(prefixSumArr[r] - prefixSumArr[l] === extraSum) {    // remember, prefixSum[r] = sum arr[0...r-1];
            console.log(l, r)
            const len = r - l;
            maxLen = Math.max(len, maxLen);
            ans = n - maxLen;
        }
    }
    return ans;
}