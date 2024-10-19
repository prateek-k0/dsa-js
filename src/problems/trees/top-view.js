/*
    top view of binary tree
    for each node, we need to store the horizontal distance from the root
    and for each horizontal distance, we need to find the first element, that will make the top view
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
 * @return {number[]}
 */
export function topView(root) {
    const horizontalDistanceHash = {};  // to store with different horizontal distances
    let minX = 1e5; // min and max horizontal distances, to traverse the horizontal distance hash
    let maxX = -1e5;
    const dfs = (node, x = 0) => {
        if(horizontalDistanceHash[x] === undefined) {   // if the current horizontal distance is not stored yet, means this is the first element, store it
            horizontalDistanceHash[x] = node.val;
        }   // else, dont store it
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        if(node.left !== undefined) dfs(node.left, x - 1);
        if(node.right !== undefined) dfs(node.right, x + 1);
    }
    dfs(root);
    // traverse from each horizontal distance, and store elements in the array
    const res = [];
    for(let i = minX; i <= maxX; i++) {
        res.push(horizontalDistanceHash[i]);
    }
    return res;
}