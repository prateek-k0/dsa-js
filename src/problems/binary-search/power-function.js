/*
    Pow(x, n)

    https://leetcode.com/problems/powx-n/description/

    for negative exponent, reciprocate the base and make n positive, since
    x^(-n) = (1/x)^n
*/

export function pow(x, n) {
    if(n < 0) {
        x = 1/x;
        n = -n;
    };
    let result = 1;
    let currentProduct = x;
    while(n > 0) {
        if(n % 2 === 1) {   // at odd power
            result *= currentProduct;
        }
        currentProduct *= currentProduct; // square the currentProduct
        n = Math.floor(n / 2);  // halve the exponent
    }
    return result;
}

