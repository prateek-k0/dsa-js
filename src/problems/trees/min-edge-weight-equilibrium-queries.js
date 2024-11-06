// https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/description/

// TODO: optimize for TLE

/*
    Since its a tree, it can be rooted at any point (we dont have to check if the node has zero in-degree or not)
    
    Like the distance between 2 nodes has the following formula
    d(u, v) = d(root, u) + d(root, v) - 2*d(root, lca(u, v)),
    Similarly, there is the same formula for finding the frequency of the weights of the edges in the path:
    for each w (w ranges from 1 to 26),
    weightFreq[w] = edgeFreq[u][w] + edgeFreq[v][w] - 2*edgeFreq[lca(u, v)][w];

    to the paths to edges with the same weight, we simply have to find the most frequent element, and change other elements to it. Any other way will incur more cost.
    Min cost to convert path to same weights = length of path - count of most frequent element;
*/
const maxWeight = 26;
const ceilP2 = (n = 1e4) => Math.ceil(Math.log2(n)) + 1;

export function minWeightOperationsQueries(n, edges, queries) {
    const maxPow = ceilP2(n);
    const kthAncestor = new Array(n).fill(0).map((r) => new Array(maxPow).fill(-1));
    const parent = new Array(n).fill(0);
    const depth = new Array(n).fill(0);
    const edgeFreq = new Array(n).fill(0).map((r) => new Array(maxWeight + 1).fill(0));  // to store freq of edge weights from root to current node, weights can be from 1 to 26
    const adj = {}; // for dfs

    function dfs(node, d = 0, p = -1, w = 0) {  // w is the weight of the edge from parent to current node
        depth[node] = d;
        parent[node] = p;
        if (p !== -1) {  // for root, no incoming edges, so all weights are 0, so no need to change
            edgeFreq[node] = [...edgeFreq[p]];  // simply copy edge freq of parent, and then increment for weight of edge between parent and node
            edgeFreq[node][w] += 1;
        }
        for (const [neighbour, weight] of (adj[node] ?? [])) {
            if (neighbour !== p) {
                dfs(neighbour, d + 1, node, weight);
            }
        }
    }

    // construct adjacency storing neighbours and weights
    for (const [u, v, w] of edges) {
        if (adj[u] === undefined) {
            adj[u] = [];
        }
        if (adj[v] === undefined) {
            adj[v] = [];
        }
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    // traverse the tree and fill depth, parent and edge weight freq from root to each node
    dfs(0, 0, -1, 0);

    // store kth ancestors
    for (let i = 0; i < maxPow; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0) {
                kthAncestor[j][i] = parent[j];
            } else {
                if (kthAncestor[j][i - 1] !== -1) {
                    kthAncestor[j][i] = kthAncestor[kthAncestor[j][i - 1]][i - 1];
                }
            }
        }
    }

    // kth ancestor
    function getKthAncestor(node, k) {
        let kth = node;
        for (let i = 0; i < maxPow; i++) {
            if (((1 << i) & k) !== 0) {
                kth = kthAncestor[kth][i];
                if (kth === -1) break;
            }
        }
        return kth;
    }

    // lca of 2 nodes
    function getLCA(u, v) {
        if (depth[u] > depth[v]) {
            [u, v] = [v, u];
        }
        const depthDiff = depth[v] - depth[u];
        if (depthDiff > 0) {
            v = getKthAncestor(v, depthDiff);
        }
        if (u === v) {
            return u;
        }
        for (let i = maxPow - 1; i > -1; i--) {
            const parentU = kthAncestor[u][i];
            const parentV = kthAncestor[v][i];
            if (parentU === parentV) {
                continue;
            }
            u = parentU;
            v = parentV;
        }
        return parent[u];
    }

    // process queries
    const res = [];
    for (const [u, v] of queries) {
        const lca = getLCA(u, v);
        const pathLength = depth[u] + depth[v] - (2 * depth[lca]);
        let maxWeightFreq = 0;
        for (let i = 1; i <= maxWeight; i++) {   // all possible weights
            const weightFreq = edgeFreq[u][i] + edgeFreq[v][i] - (2 * edgeFreq[lca][i]);
            maxWeightFreq = Math.max(weightFreq, maxWeightFreq);
        }
        res.push(pathLength - maxWeightFreq);
    }
    return res;
}