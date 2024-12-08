// https://leetcode.com/problems/remove-element

/*
    We can use 2 pointer approach for this:
    1st pointer, from the left: 1st element equal to val
    2nd pointer from right, 1st element from right not equal to val
*/

export function removeElement(nums, val) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        // determine position for l
        while (l < nums.length && nums[l] !== val) l++;
        // determine position for r
        while (r > -1 && nums[r] === val) r--;
        // check if the two can be swapped, if yes, swap them
        if (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
        }
    }
    let k = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === val) break;
        k++;
    }
    return k;
}