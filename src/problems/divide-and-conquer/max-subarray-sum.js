// https://leetcode.com/problems/maximum-subarray/

// divide and conquer version
// ccalculate the max crosiing sum at each merge, and see it its greater than left and right halves


export function maxSubarraySum(nums) {
    return divide(nums, 0, nums.length - 1);
}

function divide(arr, l, r) {
    if(l < r) {
        const m = Math.floor((l + r) / 2);
        const leftMaxSum = divide(arr, l, m);
        const rightMaxSum = divide(arr, m+1, r);
        const crossingSum = merge(arr, l, m, r);
        return Math.max(leftMaxSum, rightMaxSum, crossingSum);
    } else {
        return arr[l];
    }
}

function merge(arr, l, m, r) {
    let sum = 0; 
        let leftMax = -Infinity;
        let rightMax = -Infinity;

        // Include elements on left of mid. (including mid), traverse from the end for left for crossing sum
        for (let i = m; i >= l; i--) { 
            sum = sum + arr[i]; 
            if (sum > leftMax) 
                leftMax = sum; 
        } 

        // Include elements on right of mid (including mid)
        sum = 0;
        for (let i = m; i <= r; i++) { 
            sum = sum + arr[i]; 
            if (sum > rightMax) 
                rightMax = sum; 
        } 

        // Return sum of elements on left and right of mid 
        // returning only left_sum + right_sum will fail for [-2, 1] 
        // subtract arr[m], since it is taken twice
        return Math.max(leftMax + rightMax - arr[m], leftMax, rightMax); 
}