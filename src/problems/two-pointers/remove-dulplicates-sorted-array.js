// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums) {
    let k = 1;  // pointer to non-repeating set of elements
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) { // if not equal to previous, put at kth position and increment k
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}; 