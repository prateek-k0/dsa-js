// https://leetcode.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */
export function invertBinaryTree(root) {
    if(root === null) return null;
    let invertedLeft = (root.left !== null) ? invertTree(root.left) : null;
    let invertedRight = (root.right !== null) ? invertTree(root.right) : null;
    root.left = invertedRight;
    root.right = invertedLeft;
    return root;
};