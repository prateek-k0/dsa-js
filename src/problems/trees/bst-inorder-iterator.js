// https://leetcode.com/problems/binary-search-tree-iterator


/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = [];
    // put all left nodes into the stack
    let curr = root;
    while(curr !== null) {
        this.stack.push(curr);
        curr = curr.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const topLeft = this.stack.pop();
    // put all left nodes of the right subtree into the stack
    let curr = topLeft.right;
    while(curr !== null) {
        this.stack.push(curr);
        curr = curr.left;
    }
    return topLeft.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};