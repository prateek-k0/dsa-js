export function integerToRoman(num) {
    // hashed values for integers
    const values = {    // decimal places : values, arrays contain values for 1...9;
        1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        10: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        100: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        1000: ['', 'M', 'MM', 'MMM'],
    }

    let romanStr = '';
    let int = num;
    let multiplier = 1;    // place multiplier to calculate value at any given number
    while (int > 0) {
        const digit = int % 10; // get last digit
        romanStr = (values?.[multiplier]?.[digit] ?? '') + romanStr;
        int = Math.floor(int / 10); // remove last digit
        multiplier *= 10;   // increase place multiplier
    }
    return romanStr;
}