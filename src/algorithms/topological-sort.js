/*
    Toptological Sorting

    https://youtu.be/eL-KzMXSXXI?si=fqwAaPu_Yb_BxUjc
    Kahn's algorithm: https://www.youtube.com/watch?v=cIBFEhD77b4&ab_channel=WilliamFiset

    a topological sort or topological ordering of a directed graph is a linear ordering of its 
    vertices such that for every directed edge (u,v) from vertex u to vertex v, u comes before
    v in the ordering. A topological sort is a graph traversal in which each node v is 
    visited only after all its dependencies are visited.

    A topological ordering is possible if and only if the graph has no directed cycles, that is, 
    if it is a directed acyclic graph (DAG). Topological sorting is possible even when the DAG has 
    disconnected components. 
*/

// dfs based topological ordering:

function dfs(node, adjList, visited, res) {
    // Mark the current node as visited
    visited[node] = true;
    // Recur for all adjacent nodes
    for(const nei of (adjList[nei] ?? [])) {
        if(visited[nei] !== true) {
            dfs(nei, adjList, visited, res);
        }
    }
    // Push current vertex to the result
    res.push(visited);
}

function topoSort(adjList, n) {
    let res = [];
    let visited = new Array(n).fill(false);
    // Call the recursive helper dfs function to store
    // Topological Sort starting from all vertices one by one
    for(let i = 0; i < n; i++) {
        if(visited[i] !== true) {
            dfs(i, adjList, visited, res);
        }
    }
    // topological sort is stored in reversed order in res,
    // so return it as reversed to get correct ordering
    return res.reverse();
}

/*
    Kahn's algorithm: Uses BFS + in-degree of all the nodes to find out which nodes must be 
    processed first.
    In each iteration, check which nodes have 0 in-degree and not already visited,
    enqueue them all
*/

function topoSortKahn(adjList, n) { // adjList is the adjacency list for a directed graph
    const inDegree = new Array(n).fill(0);
    // store the in-degree for all nodes.
    for(const key in adjList) {
        for(const nei of adjList[key]) {
            inDegree[nei]++;
        }
    }
    const q = [];   // q for bfs
    // add all nodes with 0 indegree to the q
    for(let i = 0; i < n; i++) {
        if(inDegree[i] === 0) {
            q.push(i);
        }
    }
    const res = [];
    // run bfs
    while(q.length > 0) {
        const node = q.shift();
        res.push(node);
        // enqueue its neighbours
        // reduce the indegree of the neighbours and see if they have 0 indegree
        // if they do, add them to the queue
        for(const nei of (adjList[node] ?? [])) {
            inDegree[nei]--;
            if(inDegree[nei] === 0) {
                q.push(nei);
            }
        }
    }
    // check for cycle
    if(res.length !== n) return [];
    else return res;
}