// https://leetcode.com/problems/reconstruct-itinerary/description/

// backtracking solution
export function findItinerary(tickets) {
    const adj = {};   // adjacency list
    const adjEdge = {};  // adjacency to keep track of which edges have been taken during dfs
    for (const [source, dest] of tickets) {
        if (adj[source] === undefined) adj[source] = [];
        adj[source].push(dest);
        if (adjEdge[source] === undefined) adjEdge[source] = {};
        // we are saving edges as count of edges form a source to a destination, since there can be multiple tickets from same source to the same destination
        adjEdge[source][dest] = (adjEdge[source][dest] ?? 0) + 1;
    }
    // sort lexicographically
    for (const sourceKey in adj) {
        adj[sourceKey].sort((a, b) => a.localeCompare(b));
    }
    console.log(adjEdge)
    // backtrack with dfs
    const dfs = (node, currentPath = []) => {
        if (currentPath.length === tickets.length + 1) { // all nodes are included
            return true;
        } else {
            for (const neighbor of (adj[node] ?? [])) {
                if (adjEdge[node][neighbor] !== undefined && adjEdge[node][neighbor] > 0) {  // if not all edges are used up
                    adjEdge[node][neighbor] -= 1; // use an edge
                    currentPath.push(neighbor);
                    if (dfs(neighbor, currentPath) === true) {  // path exists
                        return true;
                    } else {  // backtrack
                        adjEdge[node][neighbor] += 1;  // un use an edge
                        currentPath.pop();
                    }
                }
            }
            return false; // path does not exists 
        }
    }
    const path = ['JFK'];
    dfs('JFK', path);
    return path;
};