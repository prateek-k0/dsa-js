export function romanToInteger(str) {
    let currentSum = 0;
    const values = {    // save values of all possible last digit
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let prevVal = 0;    // to store value at prev iteration
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i--) { // iterate from right to left
        const currVal = values[str[i]];
        if (currVal < prevVal) {    // if prev val is > current val (line IV, I < V, or XL, X < L)
            sum = sum - currVal;    // then subtract
        } else {
            sum = sum + currVal;    // else, add
        }
        prevVal = currVal;  // update prevVal
    }
    return sum;
}