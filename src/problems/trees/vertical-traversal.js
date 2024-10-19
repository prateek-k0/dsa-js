/*
    Vertical order traversal of the tree

    https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/

    we need to store horizontal distance from the root
    for each horizontal distance, sort the nodes for the following:
    if(node1.y !== node.y), ie, not at the same level, then use the one at the upper level
    else, sort according to the node's parent's horizontalDistance or their values, depending on the requirement
*/

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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const horizontalDistance = {};
    let minX = 1e5;
    let maxX = -1e5;
    const dfs = (node, x = 0, parentX = 0, depth = 0) => {
        horizontalDistance[x] = (horizontalDistance[x] ?? []).concat({ value: node.val, y: depth, x, parentX});
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        if(node.left !== null) dfs(node.left, x - 1, x, depth + 1);
        if(node.right !== null) dfs(node.right, x + 1, x, depth + 1);
    }
    dfs(root, 0, 0, 0);
    const verticalTraversal = [];
    for(let i = minX; i <= maxX; i++) {
        horizontalDistance[i].sort((a, b) => {
            if(a.y !== b.y) return a.y - b.y;
            // else return a.parentX - b.parentX;
            else return a.value - b.value;
        });
        verticalTraversal.push(horizontalDistance[i].map((d) => d.value))
    }
    return verticalTraversal;
};