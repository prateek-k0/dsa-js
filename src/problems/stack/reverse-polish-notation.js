/*
    Evaluate reverse polish notation
    https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
*/

const evalOp = {
    '*': (op1, op2) => +op1 * +op2,
    '/': (op1, op2) => Math.trunc(+op1 / +op2),
    '+': (op1, op2) => +op1 + +op2,
    '-': (op1, op2) => +op1 - +op2,
}

export function reversePolishNotation(tokens = []) {
    const stack = [];
    for(let i = 0; i < tokens.length; i++) {
        if(Number.isNaN(+(tokens[i])) === false) { // if token is a number, simply push it in the stack
            stack.push(tokens[i]);
        } else {    // else, evaluate and push result in the stack
            const op2 = stack.pop();
            const op1 = stack.pop();
            const result = evalOp[tokens[i]](op1, op2);
            stack.push(result);
        }
        console.log(stack);
    }
    return stack[0];
}