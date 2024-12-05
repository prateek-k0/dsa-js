// https://leetcode.com/problems/divide-two-integers/description/

/*
    Solution: See if the divisor * (2^bit) is <= dividend, if it is, subtract from dividend 
    ana add 1 << bit to the quotient.
*/


// unoptimized
function divisionOf2NumbersUnoptimized(dividend, divisor) {
    const positiveLimit = (2 ** 31) - 1;
    const negativeLimit = -(2 ** 31);
    const isNegative = (dividend ^ divisor) < 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let quotient = BigInt(0);
    while(dividend >= divisor) {
        let bit = 0;
        while(BigInt(dividend) >= BigInt(divisor << bit)) bit++;
        quotient += BigInt(1 << (bit - 1));
        dividend -= divisor << (bit - 1);
    }
    quotient = (isNegative === true) ? -quotient : quotient;
    if(quotient > BigInt(positiveLimit)) return positiveLimit;
    if(quotient < BigInt(negativeLimit)) return negativeLimit;
    return Number(quotient);
}


// optimized
export function divisionOf2Numbers(dividend, divisor) {
    const positiveLimit = (2 ** 31) - 1;
    const negativeLimit = -(2 ** 31);
    const isNegative = (dividend ^ divisor) < 0;    // if both numbers are negative, xor is positive
    dividend = BigInt(Math.abs(dividend));
    divisor = BigInt(Math.abs(divisor));
    let bit = 31;
    let quotient = BigInt(0);
    while(dividend >= divisor) {
        // try multiplying divisor by 2^bit
        // if its less than or equal to dividend, add it to the quotient
        const maxDivisor = divisor << BigInt(bit);  
        if(dividend < maxDivisor || maxDivisor <= 0n) bit --;
        else {
            quotient += BigInt(1 << bit);
            dividend -= divisor << BigInt(bit);
        }
    }
    quotient = (isNegative === true) ? -quotient : quotient;
    if(quotient > BigInt(positiveLimit)) return positiveLimit;
    if(quotient < BigInt(negativeLimit)) return negativeLimit;
    return Number(quotient);
}

