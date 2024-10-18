// https://leetcode.com/problems/subtree-of-another-tree/submissions/1426031182/

// O(n ^ 2), since we are traversing the subtree each time we travel the node

var isSubtree = function(root, subRoot) {
    if(isSame(root, subRoot) === true) return true;
    if(root === null) return false;
    const isLeftSubtreeSame = isSubtree(root.left, subRoot);
    const isRightSubtreeSame = isSubtree(root.right, subRoot);
    return isLeftSubtreeSame || isRightSubtreeSame;
};

function isSame(root1, root2) {
    if(root1 === null && root2 === null) return true;
    if(root1 === null || root2 === null) return false;
    if(root1.val !== root2.val) return false;
    const isLeftSame = isSame(root1.left, root2.left);
    const isRightSame = isSame(root1.right, root2.right);
    return isLeftSame && isRightSame;
} 