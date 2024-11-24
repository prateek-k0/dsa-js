// https://leetcode.com/problems/maximum-product-subarray

/*
    We use dynamic Programming solution for this, by keeping track of max-product so-far and
    min-product-so-far. These variables will keep track of the maximum and minimum product 
    ending at the current position

    Next, initialize a 'result' with the first element, as it could be the maximum product if the
    array has only one element. Then, iterate through the array starting from the second element. 
    For each element, calculate the new 'maxSoFar' and 'minSoFar'. 

    Consider three possibilities for each: 
    - The current number itself, 
    - The product of the current number and the previous 'maxSoFar'. 
    - The product of the current number and the previous 'minSoFar' (this is important for handling negative numbers). 
    
    Update 'result' is the new 'maxSoFar' is greater. 
    After iterating through all elements, return 'result'.
*/

export function maxSubarrayProduct(nums) {
    if(nums.length === 0) return 0;

    let maxSoFar = nums[0]; // max product till the current iteration
    let minSoFar = nums[0]; // min product till the current iteration
    let result = maxSoFar;

    for(let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let currMax = Math.max(maxSoFar * curr, curr, minSoFar * curr);
        let currMin = Math.min(minSoFar * curr, curr, maxSoFar * curr);
        // update result
        result = Math.max(currMax, result);
        // update max and min so far
        maxSoFar = currMax;
        minSoFar = currMin;
    }
    return result;
}