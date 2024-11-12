/*
    Dijkstra's shortest path algorithm - single source shortest path creates SPT
    Like BFS, but for +ve weighted graphs.
    uses a Priority queue to pick nodes with smallest costs
    https://www.youtube.com/watch?v=pSqmAO-m7Lk&ab_channel=WilliamFiset

*/  

function dijkstraSPT(edges, n, source) {    // edges will be in the form [u, v, w]
    const adjList = {};
    const spt = new Array(n).fill(false);   // to see which node has been included in the spt
    const costFromSource = new Array(n).fill(Infinity); // saves cost from source node
    costFromSource[source] = 0;  // starting spt at source;
    // construct adjList
    for(const [u, v, w] of edges) {
        if(adjList[u] === undefined) adjList[u] = [];
        adjList[u].push([v, w]);
    }
    // values will be stored in pq as [index, cost-from-source-to-index];
    const pq = new MinPriorityQueue((v) => v[1]);   // cost-from-source-to-index decides the priority
    pq.enqueue([k, costFromSource[k]]);
    while(pq.isEmpty() === false) {
        const [node, cost] = pq.dequeue();
        if(spt[node] === true) continue;
        spt[node] = true;
        // enqueue all neighbour edges from current node
        for(const [v, w] of (adjList[node] ?? [])) {
             // if the neighbour is already included in the spt, dont'proceed, since it already has the min cost calculated
            if(spt[v] === true) continue;
            if(costFromSource[v] > cost + w) {
                costFromSource[v] = cost + w;
                pq.enqueue([v, cost + w]);
            }
        }
    }
    return costFromSource;
}