// https://leetcode.com/problems/maximum-depth-of-binary-tree/

export function maxTreeDepth(root) {
    if(root === null) return 0;
    let leftMaxDepth = (root.left !== null) ? maxDepth(root.left) : 0;
    let rightMaxDepth = (root.right !== null) ? maxDepth(root.right) : 0;
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};