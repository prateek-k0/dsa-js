// https://leetcode.com/problems/count-number-of-nice-subarrays/description/

export function countNiceSubarrays(nums, k) {
    const hash = {};
    hash[0] = 1;
    const evenOddArr = nums.map((num) => num % 2);  // convert to binary array
    console.log(evenOddArr);
    let prefixOddSum = 0;   // to store prefix sum
    let niceCounter = 0;
    for(let i = 0; i < evenOddArr.length; i++) {
        prefixOddSum += evenOddArr[i];
        if(hash[prefixOddSum - k] !== undefined) {  // if subarray exists with k odd numbers, add the count to ans
            niceCounter += hash[prefixOddSum - k];
        }
        hash[prefixOddSum] = (hash[prefixOddSum] ?? 0) + 1;
    }
    return niceCounter;
}