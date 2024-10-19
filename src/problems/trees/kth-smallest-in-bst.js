/*
    https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*/

var kthSmallest = function(root, k) {
    const inorder = [];
    const inorderTraversal = (root) => {
        if(root === null) return;
        inorderTraversal(root.left);
        inorder.push(root.val);
         inorderTraversal(root.right);
    }
    inorderTraversal(root);
    return inorder[k-1];
};