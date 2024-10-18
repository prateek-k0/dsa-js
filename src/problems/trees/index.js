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
export function diameterOfBinaryTree(root) {
    let maxDiameter = -1;   // to store max depth
    const findDepth = (node) => {
        if(node === null) return 0;
        const leftMaxDepth = (node.left !== null) ? findDepth(node.left) : 0;   // max depth of left subtree
        const rightMaxDepth = (node.right !== null) ? findDepth(node.right) : 0;    // max depth of right subtree
        maxDiameter = Math.max(maxDiameter, leftMaxDepth + rightMaxDepth);  // diameter for path passing through current node = leftMaxDepth + rightMaxDepth
        return 1 + Math.max(leftMaxDepth, rightMaxDepth);   // return max depth for top nodes;
    }
    findDepth(root);
    return maxDiameter;
};