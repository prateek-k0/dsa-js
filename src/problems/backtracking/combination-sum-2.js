// https://leetcode.com/problems/combination-sum-ii/description/

export function combinationSum2(candidates, target) {   // cannot reuse an element
    const results = [];
    candidates.sort((a, b) => (a - b));
    const generateCombos = (currentCombo = [], currentStart = 0, currentSum = 0) => {
        if(currentSum > target) return;
        if(currentSum === target) {
            results.push([...currentCombo]);
        }
        for(let i = currentStart; i < candidates.length; i++) {
            if(i > currentStart && candidates[i] === candidates[i-1]) continue; // to avoid duplicates
            currentCombo.push(candidates[i]);
            generateCombos(currentCombo, i + 1, currentSum + candidates[i]);
            currentCombo.pop();
        }
    }
    generateCombos();
    return results;
}