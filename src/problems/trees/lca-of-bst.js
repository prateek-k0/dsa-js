// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root.val > p.val && root.val > q.val) {
        // both elements are less than current, move left / decrement root
        return lowestCommonAncestor(root.left, p, q);
    } else if(root.val < p.val && root.val < q.val) {
        // both elements are greater than current, move right / increment root;
        return lowestCommonAncestor(root.right, p, q);
    } else {    
        // else, root must have value in between p and q, it must be lca;
        return root;
    }
};