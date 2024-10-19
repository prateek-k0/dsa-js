/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const preorder = [];
    // store preorder
    const dfs = (node) => {
        if(node === null) {
            preorder.push(null);
            return;
        }
        preorder.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return preorder;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let rootIndex = 0;
    // build tree from preorder
    const buildTree = () => {
        if(data[rootIndex] === null) return null;
        const node = new TreeNode(data[rootIndex]);
        rootIndex++;
        node.left = buildTree();
        rootIndex++;
        node.right = buildTree();
        return node;
    }
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */