/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export function leftSideView(root) {
    if(root === null) return []
    const levelOrder = [];
    const bfsQueue = [[root]];
    while(bfsQueue.length > 0) {
        const currentLevel = bfsQueue.shift();
        const nextLevel = [];
        for(let i = 0; i < currentLevel.length; i++) {
            if(currentLevel[i].left !== null) nextLevel.push(currentLevel[i].left);
            if(currentLevel[i].right !== null) nextLevel.push(currentLevel[i].right);
        }
        levelOrder.push(currentLevel);
        if(nextLevel.length > 0) bfsQueue.push(nextLevel);
    }
    return levelOrder.map(l => l[0].val);   // left view = 1st node at each level
};