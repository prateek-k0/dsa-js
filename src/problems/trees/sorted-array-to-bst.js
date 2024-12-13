// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

export function sortedArrayToBST(nums) {
    function divideAndConquer(arr, l, r) {
        if(l < r) {
            let m = Math.floor((l + r) / 2);
            let root = new TreeNode(arr[m]);
            const leftTreeNode = divideAndConquer(arr, l, m-1);
            const rightTreeNode = divideAndConquer(arr, m+1, r);
            root.left = leftTreeNode;
            root.right = rightTreeNode;
            return root;
        } else if(l === r) {
            return new TreeNode(arr[l]);
        } else return null;
    }
    return divideAndConquer(nums, 0, nums.length - 1);
}