// https://leetcode.com/problems/symmetric-tree/description

export function isSymmetric(root) {
    const isMirrored = (left, right) => {
        if(left === null && right === null) return true;    // if both are null, return true
        if(left === null || right === null) return false;   // if only one of them is null, return false
        if(left.val !== right.val) return false;    // if val isnt same
        // else
        const outer = isMirrored(left.left, right.right);   // check outer subtree
        const inner = isMirrored(left.right, right.left);   // check inner subtree
        return outer && inner;  // true only if both outer and inner subtrees are mirrored
    }
    return isMirrored(root.left, root.right);
};