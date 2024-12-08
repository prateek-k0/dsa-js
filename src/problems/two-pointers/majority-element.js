// https://leetcode.com/problems/majority-element/

// boyre moore voting
function majorityElement(nums) {
    let candidate = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else {
            if (candidate !== nums[i]) count--;
            else count++;
        }
    }
    return candidate;
}