/*
Given an array of integers, we need to get the total XOR of all subarray XORs 
where subarray XOR can be obtained by XORing all elements of it.

An efficient solution is based on the idea to enumerate all subarrays, 
we can count the frequency of each element that occurred totally in all subarrays, if 
the frequency of an element is odd then it will be included in the final result otherwise not. 

frequency of element at index i:
(i+1) * (N-i)
*/

export function xorOfAllSubarrays(nums) {
    let res = 0;
    //iterate and check if the freq of any element is odd or even
    for(let i = 0; i < nums.length; i++) {
        const freq = (i+1) * (nums.length - i);
        if(freq % 2 !== 0) {    // odd frequencey, add to xor
            res ^= nums[i];
        }
    }
    return res;
}