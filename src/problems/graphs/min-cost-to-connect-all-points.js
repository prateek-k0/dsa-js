// https://leetcode.com/problems/min-cost-to-connect-all-points/description/

/*
    We can use minimum spanning tree to find the minimum cost to connect all points

    There are 2 ways to create an mst:
    1. Prim's algorithm
    2. Kruskal's algorithm
*/

/*
    Overview of the Algorithm for pirm's:

    This is a complete graph, meaning all the vertices can be connected to each other

    1. Calculate the distances between each pair of points and use Prim's algorithm to form the 
    minimum spanning tree.
    2. Start from an initial point, mark it as visited, and select the point with the smallest 
    distance among the unvisited points.
    3. Calculate the distances from the selected point to the unvisited points and store them 
    in a cache.
    4. Add the minimum cost edge to the priority queue using the distances from the cache.
    5.Repeat the above steps until all points are visited, and calculate the minimum cost.

    Time: O(ElogV) = O(N^2 * logN), where N <= 1000 is number of points.
*/
import { MinPriorityQueue } from "datastructures-js";

export function minCostToConnectPrims(points) {
    function calculateDistance([x0, y0], [x1, y1]) {
        return Math.abs(x1 - x0) + Math.abs(y1 - y0);   // manhattan distance
    }
    const n = points.length;
    const visited = new Array(n).fill(false);
    const pq = new MinPriorityQueue((v) => v[0]);   // we are gonna store edges in the form of [pointIndex, distance-to-the-point-from-current-index]
    let totalCost = 0;
    let currentPointIndex = 0;
    visited[currentPointIndex] = true;  // for first point
    let connectedPoints = 1;    // to see if all points are connected
    while (connectedPoints < n) {
        // check all the edges from the current point, for min unvisited edge
        for (let j = 0; j < n; j++) {
            if (visited[j] !== true) {
                const edgeDistance = calculateDistance(points[currentPointIndex], points[j]);
                pq.enqueue([edgeDistance, j]);
            }
        }
        while (visited[pq.front()[1]] === true) {
            pq.dequeue();
        }
        // now we have the min edge at the front of pq;
        const [edgeWeight, j] = pq.dequeue();
        visited[j] = true;
        currentPointIndex = j;
        totalCost += edgeWeight;
        connectedPoints++;
        console.log(points[currentPointIndex], edgeWeight);
    }
    return totalCost;
}

/*
    with Kruskal's algotiyh: Using DSU to see if 2 nodes are already connected, ie, 
    included in the mst.
    For each edge from the sorted array of all edges, try adding it in the dsu, if it can be 
    added, add its total cost
*/

class DisjointSetUnion {
    constructor(n) {
        this.parent = new Array(n); // parent[i] is the representative of the set containing i
        this.rank = new Array(n).fill(1); // for union by rank
        for (let i = 0; i < n; i++) {// initially, they are all in a separate sets, single item sets
            this.parent[i] = i;
        }
    }

    find(x) { // find the representative(parent) of the set containing x
        if (x === this.parent[x])  // if x is its own parent,
            return x;
        const parent = this.find(this.parent[x]); // otherwise, check with its parent's parent
        this.parent[x] = parent; // backtrack, path compression, reduces the height of tree to reduce traversing times
        return parent;
    }

    union(x, y) {
        let xRepresentative = this.find(x);
        let yRepresentative = this.find(y);
        if (xRepresentative === yRepresentative) // in the same set already
            return false;

        // else
        // Put smaller ranked item under bigger ranked item if ranks are different, path compression
        if (this.rank[xRepresentative] <= this.rank[yRepresentative]) {
            this.parent[xRepresentative] = yRepresentative;
            this.rank[yRepresentative] += this.rank[xRepresentative];
        }
        else {
            this.parent[yRepresentative] = xRepresentative;
            this.rank[xRepresentative] += this.rank[yRepresentative];
        }
        return true;
    }
}

export function minCostToConnectKruskal(points) {
    function calculateDistance([x0, y0], [x1, y1]) {
        return Math.abs(x1 - x0) + Math.abs(y1 - y0);   // manhattan distance
    }
    const edgesArray = [];
    const n = points.length;
    // push all edges to edges array and sort
    for(let i = 0; i < n - 1; i++) {
        for(j = i+1; j < n; j++) {
            edgesArray.push([i, j, calculateDistance(points[i], points[j])]);
        }
    }
    edgesArray.sort((a, b) => a[2] - b[2]); // ascending sort
    let connectedEdges = 0; // instead of counting points, count edges, edges in mst = n-1
    const dsu = new DisjointSetUnion(n);
    let cost = 0;
    // while iteraing over edges, keep track of how many edges are included in MST, if count is n-1, exit early
    for(let i = 0; (i < edgesArray.length) && (connectedEdges < n-1); i++) {
        // try adding and edge
        const [u, v, edgeCost] = edgesArray[i];
        const res = union(u, v);
        if(res === true) {  // edge is addable
            cost += edgeCost;
            connectedEdges++;
        }
    }
    return cost;
}