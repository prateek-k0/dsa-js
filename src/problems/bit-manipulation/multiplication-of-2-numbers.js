/*
    Multiplication with 2 numbers
    lets see 11 * 11

    we can divide the multiplier in sums of powers of 2
    11 = 8 + 2 + 1;

    11 * 11 = 11 * (8+2+1) = 11*8 + 11*2 + 11*1
    = 11 * (2^3) + 11 * (2^1) + 11*(2^0)
    = 11<<3 + 11<<1 + 11<<0

    we can find the shifting offset by log 2
*/

function log2(num) {
    let log = 0;
    while(num > 0) {
        num = num >> 1;
        log++;
    }
    return log;
}

// for positive numbers
export function multiplicationOf2Numbers(a, b) {
    let res = 0;
    while(b > 0) {
        const shift = log2(b) - 1;  // last set bit of b, log2 - 1
        res += (a << shift);
        // unset that bit
        b = b & ~(1 << shift);
    }
    return res;
}