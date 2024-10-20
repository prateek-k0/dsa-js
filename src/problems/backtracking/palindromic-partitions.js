// https://leetcode.com/problems/palindrome-partitioning/

export function palindromicPartitioning(s) {
    const result = [];
    const generatePartitions = (currentCombos = [], currentStart = 0) => {
        if(currentStart === s.length) {
            result.push([...currentCombos]);
        }
        for(let i = currentStart; i < s.length; i++) {
            if(checkPalindrome(s, currentStart, i) === true) {
                currentCombos.push(s.slice(currentStart, i+1));
                generatePartitions(currentCombos, i+1);
                currentCombos.pop();
            }
        }
    }
    generatePartitions();
    return result;
};

function checkPalindrome(str, l, r) {
    for(let i = l, j = r; i <= j; i++, j--) {
        if(str[i] !== str[j]) return false;
    }
    return true;
}