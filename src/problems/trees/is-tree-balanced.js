// https://leetcode.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isTreeBalanced = true;
    // with max tree depth for each subtree, check if each node is balanced
    const maxDepthDFS = (node) => {
        if(node === null) return 0;
        let leftMaxDepth = (node.left !== null) ? maxDepthDFS(node.left) : 0;
        let rightMaxDepth = (node.right !== null) ? maxDepthDFS(node.right) : 0;
        let isSubtreeBalanced = Math.abs(leftMaxDepth - rightMaxDepth) <= 1;
        isTreeBalanced = isTreeBalanced & isSubtreeBalanced;    // if subtree balanced is not balanced, entire tree is not
        return 1 + Math.max(leftMaxDepth, rightMaxDepth);
    }
    maxDepthDFS(root);
    return isTreeBalanced;
};