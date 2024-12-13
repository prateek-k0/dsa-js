// https://leetcode.com/problems/construct-quad-tree

/**
 * Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

// Time complexity - O((n ^ 2) * logn)
// no of levels in the tree = logn, and for each level, we do n^2 ops

// solution: https://leetcode.com/problems/construct-quad-tree/solutions

function checkIfSame(grid, r, c, len) { // checks if all cells of the sub-matrix contain the same value
    for(let i = r; i < r + len; i++) {
        for(let j = c; j < c + len; j++) {
            if(grid[i][j] !== grid[r][c]) return false; // check each point with origin
        }
    }
    return true;    
}

export function quadTree(grid) {
    function createQuadTree(grid, r, c, len) {  // r and c denote the point of origin for this sub-matrix
        if(checkIfSame(grid, r, c, len) === true) {
            return new _Node(grid[r][c], true, null, null, null, null);
        }
        const node = new _Node(grid[r][c], false);
        const halfLen = Math.floor(len / 2);
        node.topLeft = createQuadTree(grid, r, c, halfLen);
        node.topRight = createQuadTree(grid, r, c + halfLen, halfLen);
        node.bottomLeft = createQuadTree(grid, r + halfLen, c, halfLen);
        node.bottomRight = createQuadTree(grid, r + halfLen, c + halfLen, halfLen);
        return node;
    }
    return createQuadTree(grid, 0, 0, grid.length);
}


