// https://leetcode.com/problems/longest-increasing-subsequence/

/*
    Greedy version
    since LIS is a subsequence, that is, the relative order of elements must be preserve,
    we can use a greedy strategy here
    We maintain an array to store the LIS.
    We iterate over all the elements. There are 2 scenarios for every element:
    - At any point, if we find an element that is greater that all the elements currently
    in the LIS, then we simply push the element into the LIS
    - else, remove all elements that are greater than the number from the LIS, and add this number.
    At each point, keep track of the max length of LIS.

    Optimization: We don't have to remove elements for the second case. Instead, we can use 
    binary search (lower bound) to find and replace the first element greater than the current
    element. That way, we dont even have to keep track of max length, since further elements
    can simply replace existing ones. and if all elemnts are exhausted, the elements that
    were previously added into the LIS will still be present, un-changing the length of LIS.
*/

export function LIS(nums) {
    const lis = []; // to store LIS sequence
    for(let i = 0; i < nums.length; i++) {
        // see if the last element in LIS is less than curr element
        if(lis.length === 0 || lis[lis.length - 1] < nums[i]) {
            lis.push(nums[i]);
        } else {    // else, replace the next smallest element greater than this element, with current element
            const sortedIndex = lowerBound(lis, nums[i]);
            lis[sortedIndex] = nums[i];
        }
    }
    // finally, simple return the length of the sequence
    return lis.length;
}

function lowerBound(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] < target) l = m+1;
        else r = m-1;
    }
    return l;
}