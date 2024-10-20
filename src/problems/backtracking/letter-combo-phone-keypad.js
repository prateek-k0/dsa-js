const letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};
export function letterCombinations(digits) {
    if(digits === "") return []
    const result = [];
    const generateCombos = (currentCombo = [], currentIndex = 0) => {
        if(currentIndex === digits.length) {
            result.push(currentCombo.join(''));
            return;
        }
        for(let i = 0; i < letters[digits[currentIndex]].length; i++) {
            currentCombo.push(letters[digits[currentIndex]][i]);
            generateCombos(currentCombo, currentIndex + 1);
            currentCombo.pop();
        }
    }
    generateCombos();
    return result;
};