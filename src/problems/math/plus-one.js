// https://leetcode.com/problems/plus-one/description/

export function plusOne(digits) {
    // initialize carry with 1
    let carry = 1;
    // start from right
    for(let i = digits.length - 1; i > -1; i--) {
        const sum = digits[i] + carry;
        carry = Math.floor(sum / 10);
        digits[i] = sum % 10;
    }
    if(carry !== 0) digits.unshift(carry);
    return digits;
}