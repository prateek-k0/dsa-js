// https://leetcode.com/problems/subsets/

export function generateSubsets(nums) {
    const subsets = [];
    const generateSubsetCombos = (currentCombo = [], currentStart = 0) => {
        subsets.push([...currentCombo]);
        for(let i = currentStart; i < nums.length; i++) {
            currentCombo.push(nums[i]);
            generateSubsetCombos(currentCombo, i + 1);  // always do i + 1, since we can't use the same index twice
            currentCombo.pop();
        }
    }
    generateSubsetCombos([], 0);
    return subsets;
};
