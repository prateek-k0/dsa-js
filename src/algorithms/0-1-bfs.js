// 0-1 bfs

// https://leetcode.com/discuss/study-guide/1833581/bfs-and-its-variations
// https://codeforces.com/blog/entry/22276

/*
    In standard version of the BFS, we push into the queue from 1 side only, ie in the back.

    However, there may be times when we need to visit nodes based on priorities, so, for that
    we can use a 0-1 queue. For example, if we need to prioritize visiting 1's before 0's,
    we can put the 1's in the front of the queue (since we remove from the front, they'll 
    be prioritized first), while 0's can be put in the back.

    0-1 BFS is kind of a greedy strategy in BFS
*/

function bfs01(start, adj, visited = {}) {
    const queue = [start];
    while(queue.length === 0) {
        const node = queue.shift();
        if(visited[node] === true) continue;

        visited[node] = true;
        for(const nei of (adj[node] ?? [])) {
            if(visited[nei] === false) {
                // check if nei is 0 or 1
                if(nei === 1) { // higher priority - put it in front
                    queue.unshift(nei);
                } else {    // lower priority
                    queue.push(nei);
                }
            }
        }
    }
}