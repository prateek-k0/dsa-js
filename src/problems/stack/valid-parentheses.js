/*
    valid parentheses - using status
*/

const openParentheses = (p) => p === '{' || p === '(' || p === '[';
const parenthesesType = (p) => {
    if(p === '(' || p === ')') return 1;
    if(p === '{' || p === '}') return 2;
    return 3;
}

export function validParentheses(str = '') {
    const stack = [];
    for(let i = 0; i < str.length; i++) {
        if(openParentheses(str[i]) === false) {
            // if the stack.top is open parenthesis and of the same type as the current parentheses in the string
            if(stack.length > 0 && openParentheses(stack[stack.length - 1]) === true && parenthesesType(stack[stack.length - 1]) === parenthesesType(str[i])) {
                stack.pop();
            } else {    // else push in the stack, shows failed condition
                stack.push(str[i]);
            }
        } else {
            stack.push(str[i])
        }
    }
    return stack.length === 0;  // stack must be empty in valid condition
}