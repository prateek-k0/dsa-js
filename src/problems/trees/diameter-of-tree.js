// https://leetcode.com/problems/diameter-of-binary-tree/

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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = -1;
    const findDepth = (node) => {
        if(node === null) return 0;
        const leftMaxDepth = (node.left !== null) ? findDepth(node.left) : 0;
        const rightMaxDepth = (node.right !== null) ? findDepth(node.right) : 0;
        maxDiameter = Math.max(maxDiameter, leftMaxDepth + rightMaxDepth);
        return 1 + Math.max(leftMaxDepth, rightMaxDepth);
    }
    findDepth(root);
    return maxDiameter;
};