// https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
    if(root === null) return [];
    const levelOrderedNodes = [];
    const bfsQueue = [];
    bfsQueue.push([root]);
    while(bfsQueue.length > 0) {
        const currentLevel = bfsQueue.shift();
        const nextLevel = [];
        for(let i = 0; i < currentLevel.length; i++) {
            if(currentLevel[i].left !== null) {
                nextLevel.push(currentLevel[i].left);
            }
            if(currentLevel[i].right !== null) {
                nextLevel.push(currentLevel[i].right);
            }
        }
        levelOrderedNodes.push(currentLevel.map((node) => node.val));
        if(nextLevel.length > 0) bfsQueue.push(nextLevel);
    }
    return levelOrderedNodes;
};