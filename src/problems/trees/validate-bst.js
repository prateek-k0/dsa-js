/*
    Validate BST
*/
// subtreeMin and subtreeMax
var isValidBST = function(root, subtreeMin = -Infinity, subtreeMax = Infinity) {
    if(root === null) return true;
    if(root.val <= subtreeMin || root.val >= subtreeMax) return false;
    const isLeftSideTrue = (root.left === null || root.val > root.left.val);
    const isRightSideTrue = (root.right === null || root.val < root.right.val);
    if(isLeftSideTrue === false || isRightSideTrue === false) return false;
    return isValidBST(root.left, subtreeMin, root.val)  // for left subtree, values must not exceed root.val
    && isValidBST(root.right, root.val, subtreeMax);    // for right subtree, values must not be lower than root.val
}