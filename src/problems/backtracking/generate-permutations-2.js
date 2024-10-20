// https://leetcode.com/problems/permutations-ii/description/

export function generatePermutationsWithDuplicates(nums) {
    const results = [];
    nums.sort((a, b) => a - b);
    const used = Array.from(nums.length).fill(false);   // to store which indices are used in the current permutation
    const generatePermutations = (currentCombos = []) => {
        if(currentCombos.length === nums.length) {
            results.push([...currentCombos]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i] === true || (i > 0 && nums[i] === nums[i-1] && used[i-1] === false)) continue;
            used[i] = true;
            currentCombos.push(nums[i]);
            generatePermutations(currentCombos);
            used[i] = false;
            currentCombos.pop();
        }
    }
    generatePermutations();
    return results;
}