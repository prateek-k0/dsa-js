// https://leetcode.com/problems/find-if-path-exists-in-graph/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
export function checkIfPathExists (n, edges, source, destination) {
    const adj = {};
    for(const [u, v] of edges) {
        if(adj[u] === undefined) adj[u] = [];
        if(adj[v] === undefined) adj[v] = [];
        adj[u].push(v);
        adj[v].push(u);
    }
    // bfs
    const visited = {};
    const queue = [source];
    while(queue.length > 0) {
        const node = queue.shift();
        // if(visited[node] === true) continue;    // check before inserting in queue, else its slower
        if(node === destination) return true;

        visited[node] = true;
        for(const nei of (adj[node] ?? [])) {
            if(visited[nei] !== true) queue.push(nei);  // check before putting
        }
    }
    return false;
};