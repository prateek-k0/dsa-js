// https://leetcode.com/problems/happy-number/description/

function digitSquareSum(num) {
    let sum = 0;
    while(num > 0) {
        const lastDigit = num % 10;
        num = Math.floor(num / 10);
        sum += lastDigit ** 2;
    }
    return sum;
}

export function checkHappyNumber(n) {
    // to see if a number has already been seen
    // if a number is already seen, 1 cannot be reached
    const seen = {};
    while(n !== 1) {
        n = digitSquareSum(n);
        // true condition
        if(n === 1) break;
        // exit condition - already seen
        if(seen[n] === true) return false;
        // else, store in seen hash
        seen[n] = true;
    }
    // if successfully got out of the loop
    return true;
}