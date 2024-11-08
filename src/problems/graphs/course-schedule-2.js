// https://leetcode.com/problems/course-schedule-ii/description/

// we'll use topo sort for this. See Kahn's algo:
// https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/

export function courseSchedule2(n, preReq) {
    const adjList = {};
    const inDegree = new Array(n).fill(0);  // to store inDegree of vertices

    for (const [u, v] of preReq) {
        if (adjList[v] === undefined) {
            adjList[v] = [];
        }
        adjList[v].push(u);
        inDegree[u]++;
    }

    const roots = [];   // to store nodes with 0 indegree
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            roots.push(i);
        }
    }

    // bfs
    const topoOrdering = [];
    const queue = [...roots];
    while (queue.length > 0) {
        const node = queue.shift();

        for (const neighbor of (adjList[node] ?? [])) {
            inDegree[neighbor] -= 1;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }

        topoOrdering.push(node);
    }

    return topoOrdering.length === n ? topoOrdering : [];
}