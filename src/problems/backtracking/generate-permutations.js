// https://leetcode.com/problems/permutations/

export function permutations(nums) {
    const results = [];
    const generatePermutations = (currentCombo = []) => {
        if(currentCombo.length === nums.length) {   // way to check is to simply see if all elements are included
            results.push([...currentCombo]);
        }
        // start from 0, since all elements must be included;
        for(let i = 0; i < nums.length; i++) {
            // since there are no duplicates, we can simply check if the current element is already included in the combo
            if(currentCombo.includes(nums[i])) continue;
            currentCombo.push(nums[i]);
            generatePermutations(currentCombo);
            currentCombo.pop();
        }
    } 
    generatePermutations();
    return results;
};