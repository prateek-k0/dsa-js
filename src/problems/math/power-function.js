// https://leetcode.com/problems/powx-n/description/

/*
    We can use binary exponentiation for this
    just need to check if exponent is negative or positive
*/

export function pow(x, n) {
    if(n === 0) return 1;
    if(n === 1) return x;
    // check if exponent is negative
    // if it is, take reciprocal of the base and make exponent positive
    if(n < 0) {
        x = (1 / x);
        n = -n;
    }
    let res = 1;
    while(n > 0) {
        // if at any point exponent becomes odd, include x in the result
        if(n % 2 === 1) res *= x;
        // sqaure the base
        x = x ** 2;
        // halve the exponent
        n = Math.floor(n / 2);
    }
    return res;
}