// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

// similar to remove-duplicates-sorted-array, but instead, look 2 places back

export function removeDuplicatesSortedArray2(nums) {
    let k = 2;
    for(let i = 2; i < nums.length; i++) {
        if(nums[i] !== nums[k-2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}