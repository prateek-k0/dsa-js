// https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    const dfs = (node) => {
        if(node === null) return 0;
        const leftChainMax = Math.max(0, dfs(node.left));   // disregard subtrees if they are negative
        const rightChainMax = Math.max(0, dfs(node.right));
        const maxSumThroughNode = leftChainMax + rightChainMax + node.val;  // max sum that passes through the current node
        maxSum = Math.max(maxSum, maxSumThroughNode, node.val);
        return Math.max(leftChainMax, rightChainMax) + node.val;
    }
    dfs(root);
    return maxSum;
};