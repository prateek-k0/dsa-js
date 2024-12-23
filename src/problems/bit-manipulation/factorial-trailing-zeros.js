// https://leetcode.com/problems/factorial-trailing-zeroes/

// solution: https://www.purplemath.com/modules/factzero.htm
export function factorialTrailingZeros(n) {
    let result = 0;
    for(let i = 5; n / i > 0; i *= 5) {
        result += (Math.floor(n / i));
    }
    return result;
}