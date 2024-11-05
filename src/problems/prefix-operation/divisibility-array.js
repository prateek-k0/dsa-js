// https://leetcode.com/problems/find-the-divisibility-array-of-a-string/description/

/*
    we cant store the number at each iteration, since it will lead to tle and overflow

    instead, we can store the prefix sum at ith digit, and then multiplying by 10

    prefixSum[i] = (prefixSum[i-1] * 10) + +word[i];
    prefixSum[i] = (prefixSum[i] % k)
    and see if at any point its 0, if it is, its a multiple of m
*/

export function divisibilityArray(word, m) {
    let prefixSum = 0;
    const divArray = new Array(word.length).fill(0);
    for(let i = 0; i < word.length; i++) {
        prefixSum = (prefixSum*10) + (+word[i]);
        prefixSum %= m;
        if(prefixSum === 0) {
            divArray[i] = 1;
        }
    }
    return divArray;
}