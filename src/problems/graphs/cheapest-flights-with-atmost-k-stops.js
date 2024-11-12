/*
    https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

    787. Cheapest Flights With at most K Stops

    we are given a source and destination, with positive weights, so we can effectively use 
    dijkstra's algorithm to create shortest path tree

    Now, if we store the elements in the priority queue with the priority given to the 
    minimum distance first, then after a few iterations we would realize that the Algorithm 
    will halt when the number of stops would exceed. This may result in a wrong answer as it
    would not allow us to explore those paths which have more cost but fewer stops than 
    the current answer.

    To tackle this issue, we store the elements in terms of the minimum number of stops in 
    the priority queue so that when the algorithm halts, we can get the minimum cost within 
    limits.

    Also, a point to note here is that do we really need a priority queue for carrying out 
    the algorithm? The answer for that is No because when we are storing everything in terms 
    of a number of stops, the stops are increasing monotonically (by 1 at a time) which means 
    that the number of sops is increasing by 1 and when we pop an element out of the queue, 
    we are always popping the element with a lesser number of stops first.
*/

export function cheapestFlightWithAtmostKStops(n, flights, src, dest, k) {
    const adjList = {};
    // construct adjList
    for (const [u, v, w] of flights) {
        if (adjList[u] === undefined) adjList[u] = [];
        adjList[u].push([v, w]);
    }
    // sort the adjacency list for each node, so that we can grrdily pick a node with smaller cost early
    // dont need this, since we are only updating cost from source on checking, if current cost is smaller.
    // for(const key in adjList) {
    //     adjList[key].sort((a, b) => a[1] - b[1]);   // sort by w
    // }
    // we do not need a priority queue, we can simply do it with queue, just like bfs
    const costFromSource = new Array(n+1).fill(Infinity);
    costFromSource[src] = 0;
    const q = [];
    q.push([src, 0, 0]);   // [node, cost from source, steps from source]
    while (q.length > 0) {
        const [node, cost, steps] = q.shift();
        if(steps > k) continue; // if search goes beyond allowed number of steps, continue with other nodes.
        // search its neighbours
        for(const [v, w] of (adjList[node] ?? [])) {
            if(costFromSource[v] > cost + w) {
                costFromSource[v] = cost + w;
                q.push([v, cost + w, steps + 1]);
            }
        }
    }
    return costFromSource[dest] === Infinity ? -1 : costFromSource[dest];
}

// bfs - level order traversal solution
// exhaustive search, searches all paths from src to dest, within k steps
// gives TLE
export function cheapestFlightWithAtmostKStopsBFS(n, flights, src, dest, k) {
    const adjList = {};
    // construct adjList
    for (const [u, v, w] of flights) {
        if (adjList[u] === undefined) adjList[u] = [];
        adjList[u].push([v, w]);
    }
    let ans = Infinity; // if at any point in BFS we reach the dest, store the min to answer
    // we dont need a visited array, since we may need to travel a node multiple times in BFS,
    // for example, when we have a min path, but stops exceed k, in that case we may 
    // need to travel on the nodes again
    const q = [[src, 0]]; // [node, cost-from-source];
    let steps = 0;  // to keep track of how many levels of nodes were travelled
    while(q.length > 0) {
        // traverse level by level
        const levelSize = q.length;
        for(let i = 0; i < levelSize; i++) {
            const [node, cost] = q.shift();
            // if node is dest, see if the current cost is smaller than the min cost
            if(node === dest) {
                ans = Math.min(ans, cost);
                continue;  
            } else {    // else, traverse its neighbours
                for(const [v, w] of (adjList[u] ?? [])) {
                    if(cost + w > ans) continue;    // optimization, if current cost is already exceeding an already found cost even before reaching dest, dont continue
                    q.push([v, cost + w]);
                }
            }
        }
        if(steps > k) break;
        steps ++;
        
    }
    return ans === Infinity ? -1 : ans;
}

// bellman-ford algorithm: run it k+1 times
// https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/

export function cheapestFlightWithAtmostKStopsBellmanFord (n, flights, src, dest, k) {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;
    for(let i = 0; i < k+1; i++) {
      let tmpPrices = [...prices];
      for(let [source, dest, cost] of flights) { // traverse each edge
        if(prices[source] === Infinity) continue; // if current source is not reached yet
        if(tmpPrices[dest] > prices[source] + cost) // update with minimum cost
          tmpPrices[dest] = prices[source] + cost;
      }
      // update prices array
      prices = [...tmpPrices];
    }
    return prices[dest] === Infinity ? -1 : prices[dest];
  }