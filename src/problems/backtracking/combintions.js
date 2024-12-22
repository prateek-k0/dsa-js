// https://leetcode.com/problems/combinations

export function combinations(n, k) {
    const res = [];
    const generateCombos = (currentCombo = [], currentStart = 1) => {
        if(currentCombo.length === k) {
            res.push([...currentCombo]);
        } else {
            for(let i = currentStart; i <= n; i++) {
                if(currentCombo.indexOf(i) === -1) {
                    currentCombo.push(i);
                    generateCombos(currentCombo, i+1);
                    currentCombo.pop();
                }
            }
        }
    }
    generateCombos([]);
    return res;
};