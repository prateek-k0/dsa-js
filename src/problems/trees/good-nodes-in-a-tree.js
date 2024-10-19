/*
    good nodes in a tree - max element in a path 

    https://leetcode.com/problems/count-good-nodes-in-binary-tree/submissions/1426952538/

    for each path, calculate the max value
    we can simply store the max value at each dfs iteration, and comparing it with the current node's value
*/

var goodNodes = function(root) {
    let goodNodes = 0;
    const dfs = (node, maxInPath) => {
        if(maxInPath <= node.val) goodNodes++;
        if(node.left !== null) dfs(node.left, Math.max(maxInPath, node.val));
        if(node.right !== null) dfs(node.right, Math.max(maxInPath, node.val));
    }
    dfs(root, root.val);
    return goodNodes;
};