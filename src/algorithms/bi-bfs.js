/*
    Bi-directional BFS

    https://leetcode.com/discuss/study-guide/1833581/bfs-and-its-variations
    https://www.thealgorist.com/Algo/TwoEndBFS
    https://www.baeldung.com/cs/bidirectional-search

    BFS from both the start (source) and the end (target)

    Advantages over BFS: 
    If we consider branching factor b (avg number of neighbours per node), and depth d (depth of
    the tree), then bfs takes O(b^d) worst case time complexity
    
    On the other hand, if we start from source and target together, depth is halved,
    so worst case, time complexity becomes O(b^(d/2)), 
    since both forward and backward BFS run, we are exploring half of the exploration space.

    However, Bi-BFS only works if we have explicit source and target available. Also, the memory
    required to store 2 visited arrays and 2 queues might raise issues

    ALSO,
    The bi-bfs must always iterate the shorter queue first. if the length of the queue from the 
    source is greater than the length of the queue from the targrt, the code must swap the queues 
    and corresponding sets to reduce the search space. This is because, in a bidirectional search, 
    the shortest path is found only when both searches meet in the middle, and swapping the queues 
    reduces the number of nodes that need to be searched in each iteration, as the smaller queue 
    is searched first. This helps to reduce the search space and improves the efficiency of the 
    algorithm.
*/

function biBFS (source, target, adjList) {
    let queueSource = [source]; // queue for bfs starting from source
    let queueTarget = [target]; // queue for bfs starting from target;
    let visitedSource = { [source]: true }; // visited for bfs starting from source, for nodes visited by source
    let visitedTarget = { [target]: true }; // visited for bfs starting from target, for nodes visited by target
    let steps = 1;  // number of steps from start to finish

    // function to advance bfs queue by 1 level
    const advanceBFSByLevel = (queue, visited1, visited2) => {
        // level by level traversal, traverse all nodes at current (step) level
        // visit neighbours of all the nodes at current level
        const levelSize = queue.length; // number of nodes at current level
        for(let indexAtLevel = 0; indexAtLevel < levelSize; indexAtLevel++) {
            const node = queue.shift(); // nodes at current level
            // visit and enqueue neighbours
            for(const nei of (adjList[node] ?? [])) {
                if(visited1[nei] !== true) {
                    // if next level is already visited by other queue, return true
                    if(visited2[nei] === true) { 
                        return true;
                    }
                    // else, visit and push neighbour to queue
                    visited1[nei] = true;    // visit before removed from queue, faster
                    queue.push(nei);
                }
            }
        }
        return false;
    }

    // advance the smaller queue level by level, until we see a node thats visited by both
    while(queueSource.length > 0 && queueTarget.length > 0) {
        let res = false;
        if(queueSource.length <= queueTarget.length) {    // advance the smaller queue
            res = advanceBFSByLevel(queueSource, visitedSource, visitedTarget);
        } else {
            res = advanceBFSByLevel(queueTarget, visitedTarget, visitedSource);
        }
        if(res === true) return steps + 1; 
        steps += 1;
    }
    return -1;
}