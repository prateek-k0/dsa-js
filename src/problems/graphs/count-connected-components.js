// https://neetcode.io/problems/count-connected-components
// https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/

export function countConnectedComponents(n, edges) {
    const visited = new Array(n).fill(false);
    const adjList = {};
    // store edges - undirected
    for(const [u, v] of edges) {
        if(adjList[u] === undefined) {
            adjList[u] = [];
        }
        adjList[u].push(v);
        if(adjList[v] === undefined) {
            adjList[v] = [];
        }
        adjList[v].push(u);
    }
    
    const dfs = (node) => {
        if(visited[node] === true) return;

        visited[node] = true;
        for(const neighbor of (adjList[node] ?? [])) {
            dfs(neighbor);
        }
        return;
    }

    // run dfs through each unvisited node, and increment counter every time 
    let connectedCount = 0;
    for(let i = 0; i < n; i++) {
        if(visited[i] === false) {
            dfs(i);
            connectedCount++;
        }
    }
    return connectedCount;
}