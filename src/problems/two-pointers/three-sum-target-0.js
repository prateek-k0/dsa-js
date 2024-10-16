/*
    Three sum to target 0
    https://leetcode.com/problems/3sum/description/

    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
    Notice that the solution set must not contain duplicate triplets.

    we can do the following:
    1. sort the array
    2. traverse the array with i,
    3. from l = i+1, r = arr.length - 1, use 2 pointers algo with target sum as -(arr[i])
    4. change l, r  based on the comparison with the target sum
    5. to avoid duplicates, skip iterations for i, such that nums[i] === nums[i-1], nums[l] === nums[l-1], nums[r] === nums[r+1];
*/

export function threeSumTarget0(arr) {
    // sort the array
    arr.sort((a, b) => a - b);
    const results = [];
    // traverse the array
    for(let i = 0; i < arr.length; i++) {
        const target = -arr[i];
        // 2 pointers
        let l = i+1;
        let r = arr.length - 1;
        while(l < r) {
            if(arr[l] + arr[r] === target) {
                results.push([arr[i], arr[l], arr[r]]);
                l++;
                r--;
                // for removing duplicate triplets with l and r
                while(arr[l] === arr[l-1]) {
                    l++;
                }
                while(arr[r] === arr[r+1]) {
                    r--;
                }
            } else if(arr[l] + arr[r] < target) {
                l++;
            } else {
                r--;
            }
        }
        // for removing duplicate triplets with i
        while(arr[i] === arr[i+1]) {
            i++;
        }
    }
    return results;
}

