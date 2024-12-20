// https://leetcode.com/problems/count-complete-tree-nodes

export function countNodesCompleteBinTree (root) {
    let maxDepth = 0;
    // find the maxDepth
    let curr = root;
    while (curr !== null) {
        maxDepth++;
        curr = curr.left;
    }
    if (maxDepth === 0) return 0;
    // at this point, for a perfect bin tree, number of nodes = (2 ** d) - 1;
    // for number of nodes in this tree, we can subtract nodes where we have 
    // null as right or left subtree,
    // for a node to have either left or right child as null, it must be at
    // last or second-last depth
    let maxNodes = (2 ** maxDepth) - 1;
    let done = false;
    const dfs = (node, d) => {
        if (node === null) {
            if (d === maxDepth) maxNodes--;
            //if we reach a node that's the null but at a depth greater than maxDepth, its guaranteed to be from a leaf node only,
            else if (d > maxDepth) done = true;   // this condition needs to hit only once, hence we travel from right first
        } else {
            if (done === false) {  // only traverse if not done
                // traverse right first, to hit the first if-condition first
                dfs(node.right, d + 1);
                dfs(node.left, d + 1);
            }
        }
    }
    dfs(root, 1);
    return maxNodes;
};