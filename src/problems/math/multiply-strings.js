// https://leetcode.com/problems/multiply-strings/description/

export function multiplyStrings(s1, s2) {
    // base condition
    if(s1 === '0' || s2 === '0') return '0'
    // let the bigger string be s1
    if(s2.length > s1.length) {
        [s1, s2] = [s2, s1];
    }
    const res = [];
    // start multiplying from reverse of s2, will all chars of s1 in reverse
    for(let i = s2.length - 1; i > -1; i--) {
        let currRes = '' + new Array((s2.length - 1) - i).fill('0').join('');   // for trailing zeros
        let carry = 0;
        for(let j = s1.length - 1; j > -1; j--) {
            const product = (+s2[i]) * (+s1[j]) + carry;
            let productDigit = product % 10;
            carry = Math.floor(product / 10);
            currRes = productDigit + currRes;
        }
        if(carry !== 0) currRes = carry + currRes;
        res.push(currRes);
    }
    // now we can either add each of them sequentially, or use divide and conquer, since
    // addition is a commutative operation
    const stringSum = (n1 = '0', n2 = '0') => {
        
        // make both strings of equal lengths
        const maxLen = Math.max(n1.length, n2.length);
        n1 = n1.padStart(maxLen, '0');
        n2 = n2.padStart(maxLen, '0');
        console.log(n1, n2);
        // continue to add them
        let sumRes = '';
        let carry = 0;
        for(let i = n1.length - 1; i > -1; i--) {
            const sum = (+n1[i]) + (+n2[i]) + carry;
            let sumLastDigit = sum % 10;
            carry = Math.floor(sum / 10);
            sumRes = sumLastDigit + sumRes;
        }
        if(carry !== 0) sumRes = carry + sumRes;
        return sumRes;
    }

    // divide and conquer method
    const divideAtMiddle = (arr, l, r) => {
        if(l < r) {
            let m = Math.floor((l + r) / 2);
            let leftSum = divideAtMiddle(arr, l, m);
            let rightSum = divideAtMiddle(arr, m+1, r);
            return stringSum(leftSum, rightSum);
        } else {
            return arr[l];
        }
    }
    // sequential addition method
    // return res.reduce((a, c) => stringSum(a, c));
    return divideAtMiddle(res, 0, res.length - 1);
}