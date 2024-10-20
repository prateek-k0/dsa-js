// https://leetcode.com/problems/combination-sum/description/

export function combinationSum(candidates, target) {
    const results = [];
    candidates.sort((a, b) => a - b);
    const generateCombos = (currentCombo = [], currentStart = 0, currentSum = 0) => {
        if(currentSum > target) return;
        if(currentSum === target) {
            results.push([...currentCombo]);
        }
        for(let i = currentStart; i < candidates.length; i++) {
            currentCombo.push(candidates[i]);
            generateCombos(currentCombo, i, currentSum + candidates[i]);    // not i + 1, since we can reuse the same element
            currentCombo.pop();
        }
    }
    generateCombos();
    return results;
};