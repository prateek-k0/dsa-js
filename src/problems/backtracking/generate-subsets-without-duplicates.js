// https://leetcode.com/problems/subsets-ii/

export function generateSubsetsWithoutDuplicates(nums) {
    nums.sort((a, b) => a-b);   // sort to avoid duplicates (like [4,4,1] and [1,4,4] and [4,1,4])
    const subsets = [];
    const generateSubsetCombos = (currentCombo = [], currentStart = 0) => {
        subsets.push([...currentCombo]);
        for(let i = currentStart; i < nums.length; i++) {
            if(i > currentStart && nums[i] === nums[i-1]) continue; // to avoid duplicates
            currentCombo.push(nums[i]);
            generateSubsetCombos(currentCombo, i + 1);  // always do i + 1, since we can't use the same index twice
            currentCombo.pop();
        }
    }
    generateSubsetCombos();
    return subsets;
}