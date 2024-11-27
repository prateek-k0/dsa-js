// https://leetcode.com/problems/3sum-closest/

// using sorting + 2 pointer

export function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // sort ascendingly
    let closestSum = Infinity;
    for(let i = 0; i < nums.length; i++) {
        // initialize 2 pointers
        let l = i + 1;  // use i + 1 for l, since we dont want to repeat triplets
        let r = nums.length - 1;
        while(l < r) {
            const currSum = nums[i] + nums[l] + nums[r];
            // base condition: if diff is 0, return early
            if(currSum === target) return currSum;  
            // else, if currSum is closer to target then previously stored closest sum
            if(Math.abs(currSum - target) < Math.abs(closestSum - target)) {
                closestSum = currSum;
            }
            // now, update pointers
            if(currSum < target) l++;
            else r--;
        }
    }
    return closestSum;
}