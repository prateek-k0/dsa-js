  /* 
      Construct binary tree from preorder and inorder

      https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

      construct(): to construct a tree from preorder and inorder using divide and conquer
      for every root i in preOrder,
      let inorder index of i be inorderIndex.
      left subtree = nodes from inorderL to inorderIndex - 1 inside inorder list
      right subtree = nodes from inorderIndex + 1 to inorderR.
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let rootIndex = 0;   // root in preorder;
    let inorderIndex = {};  // to store index of elements in the inorder array;
    for(let i = 0; i < inorder.length; i++) {
        inorderIndex[inorder[i]] = i;
    }   
    // divide and conquer
    // left subtree = [l to inorderIndex(root) - 1]
    // right subtree = [inorderIndex[root] + 1 to r]
    const constructBinaryTree = (l = 0, r = inorder.length - 1) => {
        if(l > r) return null;  // base condition 1
        const nodeVal = preorder[rootIndex];
        rootIndex++;    // increment rootIndex for next subtrees
        const node = new TreeNode(nodeVal, null, null);
        if(l === r) return node;    // base condition 2
        else {
            const leftSubtree = constructBinaryTree(l, inorderIndex[nodeVal] - 1);
            const rightSubtree = constructBinaryTree(inorderIndex[nodeVal] + 1, r);
            node.left = leftSubtree;
            node.right = rightSubtree;
            return node;
        }
    }
    return constructBinaryTree();
};