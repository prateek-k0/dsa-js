/*
    Network delay time

    Since we need to max time (or cost) from 1 starting node (source),
    this is a single source shortest path problem, with non-negative weights.
    This can be solved using dijkstra's algorithm, to create a SPT (shortest path tree) from the 
    source node.
*/

import { MinPriorityQueue } from "datastructures-js";

export function networkDelayTime(edges, n, k) {
    const adjList = {};
    // since k is 1-indexed
    const spt = new Array(n+1).fill(false);   // to see which node has been included in the spt
    const costFromSource = new Array(n+1).fill(Infinity); // saves cost from source node
    costFromSource[k] = 0;  // starting spt at source;
    // construct adjList
    for(const [u, v, w] of edges) {
        if(adjList[u] === undefined) adjList[u] = [];
        adjList[u].push([v, w]);
    }
    // values will be stored in pq as [index, cost-from-source-to-index];
    const pq = new MinPriorityQueue((v) => v[1]);
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
    let maxCost = 0;
    for(let i = 1; i <= n; i++) {
        maxCost = Math.max(maxCost, costFromSource[i]);
    }
    return maxCost === Infinity ? -1 : maxCost;
}