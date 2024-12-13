// https://leetcode.com/problems/basic-calculator/

const isNumber = (c) => c !== ' ' && +c !== NaN && c >= 0 && c <= 9;
const isOpenParentheses = (c) => c === '(';
const isCloseParentheses = (c) => c === ')';
const isOperator = (c) => c === '+' || c === '-';

function solve(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (isOperator(nums[i])) {
            if (nums[i] === '-') {
                nums[i + 1] = -1 * (+nums[i + 1]);
            }
            nums[i] = 0;
        }
    }
    return nums.reduce((a, c) => +a + +c, 0);
}

export function basicCalculator(s) {
    const st = [];
    let i = 0;
    let lastOpen = [];
    while (i < s.length) {
        const char = s[i];
        // a number char
        if (isNumber(char) === true) {
            let numS = '';
            while (i < s.length && isNumber(s[i]) === true) {
                numS += s[i];
                i++;
            }
            st.push(numS);
        }
        else if (isOpenParentheses(char) === true) {
            lastOpen.push(st.length);
            i++;
        } else if (isCloseParentheses(char) === true) {
            const openPos = lastOpen.pop();
            const nums = st.splice(openPos, i - openPos - 1);
            st.push(solve(nums))
            i++;
        }
        else if (isOperator(char) === true) {
            st.push(char);
            i++;
        }
        else i++;
    }
    return solve(st);
};