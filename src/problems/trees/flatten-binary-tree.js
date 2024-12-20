// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

export function flattenBinaryTree(root) {
    const flattenSubtree = (root) => {
        if(root === null) return null;
        else {
            const flattenedLeft = flattenSubtree(root.left);
            const flattenedRight = flattenSubtree(root.right);
            root.right = flattenedLeft;
            root.left = null;
            let curr = root;
            while(curr.right !== null) curr = curr.right;
            curr.right = flattenedRight;
            curr.left = null;
            return root;
        }
    }
    return flattenSubtree(root);
};