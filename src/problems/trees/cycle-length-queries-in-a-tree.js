// https://leetcode.com/problems/cycle-length-queries-in-a-tree/description/

// the number of nodes can be upto 10^10, so storing depth, parent, kthancestor is not possible

/*
    But, we can use the properties of complete binary tree, since the nodes are from [1...2^n - 1]

    depth of a node: log2(node)
    parent of a node: (node / 2) , (node >> 1)
    kth parent: node >> k;

    if an edge is added form u to v, length of longest circular path =
    depth(u) + depth(v) - 2 * depth(lca(u,v)) + 1
*/

export function cycleLengthQueries(n, queries) {
    let ans = [];
    for(const [u, v] of queries) {
        const lca = getLCA(u, v, n);
        const pathLength = depth(u) + depth(v) - 2 * depth(lca);
        ans.push(pathLength + 1);   // add 1 to pathlength, to consider the newly added edge between u and v;
    }
    return ans;
}

function depth(node) {
    return Math.floor(Math.log2(node));
}

function parent(node) {
    return node >> 1;
}

function kthParent(node, k) {
    return node >> k;
}

function getLCA(u, v, maxDepth = 35) {
    if(depth(u) > depth(v)) {
        [u, v] = [v, u];
    }
    const depthDiff = depth(v) - depth(u);
    if(depthDiff > 0) v = kthParent(v, depthDiff);
    if(u === v) return u;
    for(let i = maxDepth; i > -1; i--) {
        const parentU = kthParent(u, i);
        const parentV = kthParent(v, i);
        if(parentU === parentV) {
            continue;
        }
        u = parentU;
        v = parentV;
    }
    return parent(u);
}

