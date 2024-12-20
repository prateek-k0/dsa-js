// https://leetcode.com/problems/evaluate-division/

/*
    Make a bidrectional edge for each equation, and do DFS (path finding) for each query
*/

export function evaluateDivision(equations, values, queries) {
    const adj = {};
    const res = [];
    // create adj list
    for(let i = 0; i < equations.length; i++) {
        const [u, v] = equations[i];
        if(adj[u] === undefined) adj[u] = {};
        if(adj[v] === undefined) adj[v] = {};
        adj[u][v] = values[i];
        adj[v][u] = 1 / values[i];
    }
    for(const [u, v] of queries) {
        let result = -1;
        if(adj[u] !== undefined) {  // edge case - only if root is present in the graph
            if(adj[u][v] !== undefined) result = adj[u][v]; // if already an edge
            else result = dfs(u, v);
        }
        res.push(result);
    }
    function dfs(root, target, currentCost = 1, visited = {}) {
        if(root === target) return currentCost;
        else {
            visited[root] = true;
            for(const [nei, cost] of Object.entries(adj[root] ?? {})) {
                if(visited[nei] === true) continue;
                const result = dfs(nei, target, currentCost * cost, visited);
                if(result !== -1) return result;
            }
            return -1;
        }
    }
    return res;
}