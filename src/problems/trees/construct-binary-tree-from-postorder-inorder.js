// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal

export function constructFromPostorderInorder(inorder, postorder) {
    let postorderRoot = postorder.length - 1;
    const divideAndConquer = (l, r) => {
        if(l > r) return null;
        else {
            const rootNode = new TreeNode(postorder[postorderRoot], null, null);
            postorderRoot--;
            const m = inorder.indexOf(rootNode.val);
            rootNode.right = divideAndConquer(m+1, r);
            rootNode.left = divideAndConquer(l, m-1);
            return rootNode;
        }
    }
    return divideAndConquer(0, inorder.length - 1);
};