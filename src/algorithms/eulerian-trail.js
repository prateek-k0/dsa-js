/*
    Eulerian trail

    In graph theory, an Eulerian trail (or Eulerian path) is a trail in a finite graph that visits every edge exactly once. The edges can contain same pair of vertices as source and destinations, so visiting a vertex multiple times is still possible. Only, the edges must be visited only once. 
    
    Similarly, an Eulerian circuit or Eulerian cycle is an Eulerian trail that starts and ends on the same vertex. 

    Euler proved that a necessary condition for the existence of Eulerian circuits is that all vertices in the graph have an even degree, and stated without proof that connected graphs with all vertices of even degree have an Eulerian circuit.  
    
    This is known as Euler's Theorem: A connected graph has an Euler cycle if and only if every vertex has even degree.
*/
// code for eulerian trail

let totalEdgeCount; // count of all toal edges
// usedEdgeCount is the count of all edges used till this recursion
const dfs = (node, usedEdgeCount, adjacencyList) => {
    if(usedEdgeCount === totalEdgeCount) {
        return; // base end condition
    }
    // else
    const allNeighbours = adjacencyList[node] ?? [];
    // visit all neighbours only once, hence on visit, remove the neighbors from node's adjacency list
    while(allNeighbours.length > 0) {
        const neighbor = allNeighbours.pop();   // removal of node;
        dfs(neighbor, usedEdgeCount + 1, adjacencyList);
    }
}

/*
    Problems for eulerian trail:
    1. Reconstruct the itinerary
*/