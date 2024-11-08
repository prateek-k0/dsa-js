// https://leetcode.com/problems/redundant-connection/description/

/*
    There are 2 methods to solve this: 
    1. using DSU: for every edge [u, v], if parent(u) === parent(v), then the edge is redundant
    2. using DFS: for every edge [u, v], check if v is already reachable from u, if yes, then the edge would form a cycle, if not, push it in the adjacency list
*/

// DFS version - time complexity = 0(n*e), since we are running dfs after adding every edge.
export function redundantEdge(edges) {
    const n = edges.length;
    const adjList = {};
    
    const isReachableDFS = (node, target, parent) => {
        if(node === target) return true;    // reached target

        for(const neighbor of (adjList[node] ?? [])) {
            if(neighbor !== parent) {
                const isReachable = isReachableDFS(neighbor, target, node);
                if(isReachable) return true;    // if a neighbour reaches the target
            }
        }
        return false;   // cannot be reached from current node to target
    }

    for(const [u, v] of edges) {
        if(isReachableDFS(u, v, -1) === true) { // if v is already reachable from u
            return [u, v];
        } else {    // add edge to adjacency list
            if(adjList[u] === undefined) {
                adjList[u] = [];
            }
            adjList[u].push(v);
            if(adjList[v] === undefined) {
                adjList[v] = [];
            }
            adjList[v].push(u);
        }
    }
    return 
}