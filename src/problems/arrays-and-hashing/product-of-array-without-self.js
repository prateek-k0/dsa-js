/*
    https://leetcode.com/problems/product-of-array-except-self/description/
    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

    we can use prefix and suffix products for each element:
    multiply[i] = prefix[i-1] * suffix[i+1];
*/

export function productExceptSelf(arr) {
    let prefixProd = new Array(arr.length).fill(0);
    let suffixProd = new Array(arr.length).fill(0);
    for(let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
        prefixProd[i] = (prefixProd[i-1] ?? 1) * arr[i];
        suffixProd[j] = (suffixProd[j+1] ?? 1) * arr[j];
    }
    const res = new Array(arr.length).fill(0);
    for(let i = 0; i < arr.length; i++) {
        res[i] = ((prefixProd[i-1] ?? 1) * (suffixProd[i+1] ?? 1));
    }
    return res;
}