// https://leetcode.com/problems/reconstruct-itinerary/description/

// eulerian trail solution
// solution explanation - https://anj910.medium.com/leetcode-332-reconstruct-itinerary-88bdca9fc7f2

export function findItinerary(tickets) {
    const adj = {};
    for(const [source, destination] of tickets) {
        adj[source] = (adj[source] ?? []).concat(destination);
    }
    // sort each edge in reverse lecixal order, since we'll be traversing them from the end
    for(const key in adj) {
        adj[key].sort((a, b) => a.localeCompare(b)).reverse();
    }
    const itinerary = [];
    // dfs - eulerian trail
    const dfs = (node) => {
        while(adj[node] !== undefined && adj[node].length > 0) {
            const neighbor = adj[node].pop();   // last element will be lexicographically smallest, since we've sorted in reverse
            dfs(neighbor);
        }
        itinerary.push(node);   // postorder
    }
    dfs('JFK');
    return itinerary.reverse(); // since we've used post order, we need to reverse the sequence
}