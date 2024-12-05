// https://leetcode.com/problems/reverse-integer/

/*
    Very similar to reversing a number,
    we just need to keep track of whether we are exceeding thr limit of 2^31 - 1 
*/

export function reverseInteger(x) {
    const positiveLimit = (2 ** 31) - 1;
    const negativeLimit = -(2 ** 31);
    const isNegative = x < 0;
    x = Math.abs(x);
    let reversedX = 0;
    // normal reversed logic
    while(x > 0) {
        const lastDigit = x % 10;
        reversedX = (reversedX * 10) + lastDigit;
        x = Math.floor(x / 10);       
    } 
    if(isNegative === true && reversedX * -1 < negativeLimit) return 0;
    if(isNegative === false && reversedX > positiveLimit) return 0;
    else return reversedX * (isNegative === true ? -1 : 1);
}