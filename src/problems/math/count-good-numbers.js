/*
    count good numbers
    https://leetcode.com/problems/count-good-numbers/description/

    https://leetcode.com/problems/count-good-numbers/solutions/1314319/c-full-explanation-power-fast-power-modular-power/ 

    digits can be from 0-9
    in these digits, there are 5 even numbers (0,2,4,6,8), and 4 prime numbers (2,3,5,7)
    for a good string (0 indexed), even numbered places can be even numbers and odd numbered places can be primed

    so for n digits, 0th digit can have 5 options, 1st digit can have 4 options, 2nd digit can have 5 options etc.

    for n digits: total possibilities = 5 * 4 * 5 * 5 *....
    5 * 4 is repeated Math.floor(n / 2) times.
    for the last digit, if n is odd, the last digit is even (since n is 0-indexed, n-1 is even)
    so it can have 5 options. if its even, it can be 4 times

    so, the number of possibilities can be generalized as
    possibilities(n) = (5 * 4) ^ (Math.floor(n / 2)), if n is even.
    possibilities(n) = ((5 * 4) ^ (Math.floor(n / 2))) * 5, if n is odd.

    for calculating 20 ^ (n / 2), we can use binary exponentiation
*/

// since n can be upto 10^15, we need to use BigInt, to avoid rounding-off error

const mod = BigInt(1e9 + 7);

function modularPower(x, n) {
    let res = BigInt(1);
    while (n > 0n) {
        if ((n % 2n) === 1n) {
            res = (res * x) % mod;
        }
        x = (x * x) % mod;
        n = (n / 2n) % mod;
    }
    return res;
}

export function countGoodNumbers (n) {
    n = BigInt(n);
    // first, find (5 * 4) ^ (n / 2)
    const res = modularPower(20n, n / 2n);
    // next, see if n is odd, if n is odd, n-1 is even, and hence last digit will have 5 possibilities, and if not, return res
    return Number((n % 2n === 1n) ? (res * 5n) % mod : res);
};
