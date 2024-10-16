/*
    Generate Parentheses

    https://leetcode.com/problems/generate-parentheses/description/

    We can solve this using backtracking.

    openP: number of open parentheses remaining to be used in the sequence (max = n, min = 0)
    closeP: number of close parentheses remaining to be used in the sequence (max = n, min = 0)

    for validParentheses, closeP > openP (number of openP remaining must be less than closeP, that is, more open parentheses must be used).
    and, recurse to adding open parentheses before the close parentheses;
*/

export function generateParentheses(n) {
    const results = [];
    function generateUtil(currentString = [], openP = n, closeP = n) {
        if(openP === 0 && closeP === 0) {
            results.push(currentString.join(''));
        } else {
            // for generating valid parentheses, always make sure closeP > openP (open parentheses are remaining less then the close ones), and open parentheses is added before close parentheses
            if(openP > 0) {
                generateUtil(currentString.concat('('), openP - 1, closeP);
            }
            if(closeP > openP) {
                generateUtil(currentString.concat(')'), openP, closeP - 1);
            }
        }
    }
    generateUtil([], n, n);
    return results;
}