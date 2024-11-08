// is graph a valid tree

// https://neetcode.io/problems/valid-tree

export function graphValidTree(n, edges) {
    // base condition, there are always n-1 edges in a tree with n nodes
    if(edges.lentgh > n-1) return false;
    const visited = new Array(n).fill(false);
    const adjList = {};
    // trees are undirected graphs
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

    const isCyclicDFS = (node, parent) => {
        visited[node] = true;
        for(const neighbor of (adjList[node] ?? [])) {
            if(visited[neighbor] === false) {   // check if neighbour is visited, if not, dfs to it
                if(isCyclicDFS(neighbor, node) === false) return false; // if there exists a cycle further down the path, return false
            } else if(visited[neighbor] === true && neighbor !== parent) {
                return false;   // cycle exits
            }
        }
        return true;
    }

    // since graph is undirected, we can pick any vertex as root
    const res = isCyclicDFS(0, -1);
    if(res === false) return false;
    // check for any unvisited nodes
    for(let i = 0; i < n; i++) {
        if(visited[i] === false) return false;
    }
    // else
    return true;
}