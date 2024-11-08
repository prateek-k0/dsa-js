// https://leetcode.com/problems/course-schedule/description/

/*
    This can be solved in 2 ways:
    1. with DFS: check if a cycle exists in a graph: https://www.geeksforgeeks.org/detect-cycle-in-a-graph/
    2. with topological sort: https://www.geeksforgeeks.org/topological-sorting/
    if topo sort doesnt visit all nodes, then its false
*/

// DFS version
/*
    For DFS version, we use 2 arrays:
    1. visited: to see if the node has been visited in current execution (if it is, cycle exists)
    2. seen: to see if the node has been visited outside of current execution, useful for pruning
*/
export function courseScheduleDFS(n, preReq) {
    const adjList = {};
    const visited = new Array(n).fill(false);
    const seen = new Array(n).fill(false);

    for (const [u, v] of preReq) {
        if (adjList[u] === undefined) {
            adjList[u] = [];
        }
        adjList[u].push(v); // directed
    }

    // dfs for cycle detection, 
    const dfs = (node) => {
        if (visited[node] === true) { // if already visited during this execution, cycle exists
            return false;
        }
        if (seen[node] === true) {   // if node is visited outside execution context, no cycle exists in its neighbours, we can safely skip this node for further to save on time
            return true;
        }
        // visit the node
        visited[node] = true;
        seen[node] = true;
        for (const neighbor of (adjList[node] ?? [])) {
            let result = dfs(neighbor);
            if (result === false) {  // cycle exists further
                return false;
            }
        }
        // unvisit the node, for outside of execution context
        visited[node] = false;
        return true;
    }

    // run dfs for all nodes, and see if it fails for any 1 node
    for (let i = 0; i < n; i++) {
        if (dfs(i) === false) {
            return false;
        }
    }
    // if not, return true
    return true;
}

// Topological Sort version - BFS version using kahn's algorith,
// https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/
/*
    In this, we do a multi source bfs from all the roots with 0 indegree, and create a topological ordering
*/
export function courseScheduleTopo(n, preReq) {
    const adjList = {};
    // const visited = new Array(n).fill(false); // we dont need visited for kahn's algo
    const inDegree = new Array(n).fill(0);  // to store inDegree of vertices

    for (const [u, v] of preReq) {
        if (adjList[u] === undefined) {
            adjList[u] = [];
        }
        adjList[u].push(v);
        inDegree[v]++;
    }

    const roots = [];   // to store nodes with 0 indegree
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            roots.push(i);
        }
    }

    // bfs
    const topoOrdering = [];
    const queue = [...roots];
    while (queue.length > 0) {
        const node = queue.shift();
        // visited[node] = true;

        for (const neighbor of (adjList[node] ?? [])) {
            inDegree[neighbor] -= 1;
            // if(inDegree[neighbor] === 0 && visited[neighbor] === false) {
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }

        topoOrdering.push(node);
    }

    return topoOrdering.length === n;
}