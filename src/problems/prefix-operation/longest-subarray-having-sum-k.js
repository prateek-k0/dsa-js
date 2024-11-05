// https://www.geeksforgeeks.org/longest-sub-array-sum-k/

// using prefix sum, store index in the map,
// if an index already exists, do not update the index, since the we have to maximize the length, 
// we have to only save the earliest index of the sub array sum

export function longestSubarraySumK(arr, k) {
    let prefixSum = 0;
    const prefixMap = {};
    // for sum = 0, set index to -1, since if at any index prefix sum is 0, we can use the entire suarray until that index 
    prefixMap[0] = -1;
    let maxLen = 0;
    for(let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];
        // check if prefix-sum[i] - k exists, if yes, update the max-len
        if(prefixMap[prefixSum - k] !== undefined) {
            let len = i - prefixMap[prefixSum - k];
            maxLen = Math.max(len, maxLen);
        }
        // save index of current prefix sum, if not already saved
        if(prefixMap[prefixSum] === undefined) {
            prefixMap[prefixSum] = i;
        }
    }
    return maxLen;
}