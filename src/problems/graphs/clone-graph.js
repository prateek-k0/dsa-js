/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */


export function cloneGraph(root) {
    const nodeValMap = new Map();
    const dfs = (node) => {
        if(node === null) return null;
        // if its visited, its already in nodeValMap
        if(nodeValMap.has(node.val) === true) {
            return nodeValMap.get(node.val);
        }
        // else, make a new node
        const cloneNode = new _Node(node.val, []);
        nodeValMap.set(node.val, cloneNode);    // save into map before traversing its neighbours, otherwise it will recurse infinitely
        cloneNode.neighbors = (node.neighbors ?? []).map(dfs);
        return cloneNode;
    }
    return dfs(root);
};