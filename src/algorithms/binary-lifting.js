/*
    There are generally 2 ways which can be used to solve problems in o(logn) time - 

    1. Binary search, merge sort => divide the array in 2 segments of equal length, so on every operation, the length of array becomes half (n, n/2, n/4, n/8....1);

    2. Binary Exponentiation, Binary lifting => instead of dividing the length of the array, we store statistics at powers of 2, ie, 1, 2, 4, 8, 16, 32...etc. The result is an operation of this power.

    Binary lifting is a method of exponentiation to store parents of each nodes in a tree, 
    for each node, we store its 1st, 2nd, 4th, 8th....ancestor, which can be used to find kth anestor of anu node in a tree in o(logn) time. We can also compute the LCA of 2 nodes in a binary tree with it.

    Distance between 2 nodes (u, v) = depth[u] + depth[v] - 2 * depth [LCA(u,v)]
*/

// kth parent of node
// time complexity: o(log(n)), if n is 1e9, the loop runs 32 times, or, at monst o(log(n)) times
function getKthAncestor(node, k, kthParent, maxDepth = 32) { 
    // for 1e9 elements, the tree depth can at max be 1e9, and since we store 1,2,4,8...parent of a node, we have to iterate upto log(1e9) times, that is, 32 times. (0 to 31)
    for(let i = 0; i < maxDepth; i++) {
        if(((1 << i) & k) !== 0) {  // if ith bit is set in k
            node = kthParent[node][i];
            if(node === -1) break;  // over height of the tree
        }
    }
    return node;
}

/*  
    kthParent[node][i] stores 2^i th parent of the node
    kthParent[node][0] = 1st parent (2^0);
    kthParent[node][1] = 2nd parent (2^1);
    ...etc,

    Now, to store kthParent of each node, we have to run a loop:
    for each node we have to find [0,1,2,3..maxDepth] parent which would be [1, 2, 4, 8, 16] parent for each node.

    1st parent for each node from DFS traversal which is there immediate parent. We can use this information to iteratively find higher power parents of each node.

    kthParent[j][i] = kthParent[ kthParent[j][i-1] ] [i-1];
    for example, to find 4th parent of j, we can find j's 2nd parent, and then find its 2nd parent
    kthParent[j][2] = kthParent[kthParent[j][1]][1];      
*/

function storeParents(n = 1e5, parent = [], maxDepth = 32) {
    // initialize array to store kth parent
    const kthParent = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        kthParent[i] = new Array(maxDepth).fill(0);
    }
    // now, store the binary
    for(let i = 0; i < maxDepth; i++) {
        for(j = 0; j < n; j++) {
            if(i === 0) {   // for first parent, we have already calculated with parent array (with dfs)
                kthParent[j][i] = parent[j];
            } else {
                kthParent[j][i] = kthParent[kthParent[j][i-1]][i-1];
            }
        }
    }
    return kthParent;
}

/*
    now, to find lca of u,v, we first need to get both u and v to same level, and then go to its 1st parent iteratively, if at any point in time, u === v, we have our lca
*/ 

// o(log n);
function lca(u, v, kthParent, depth, maxDepth = 32) {
    if(depth[u] > depth[v]) {   // v has to have a larger depth, if not, swap
        [u, v] = [v, u];
    }
    // to get u and v at the same level, move v up
    if(depth[u] !== depth[v]) {
        const diff = depth[v] - depth[u];
        // move v up
        v = getKthAncestor(v, diff, kthParent, maxDepth);
    }
    if(u==v) { // case where both node are originally in same subtree
        return u;
    }
    // now, u and v is at same level
    for(let i = maxDepth; i > -1; i--) {
        const uParent = kthParent[u][i];
        const vParent = kthParent[v][i];
        if(uParent === vParent) {
            continue;
        }
        // if they are not equal, then move up
        u = uParent;
        v = vParent;
    }
    // now, both u and v are just 1 level below the lca
    return kthParent[u][0];
}

// with binary search, o(log(logn))
// instead of looping from 0 to maxDepth - 1, bin search over it.
// if mth parent of u and v are equal, move left(lower parent), else move right(upper parent)
function lcaBinSearch(u, v, kthParent, depth, maxDepth = 32) {
    if(depth[u] > depth[v]) {   // v has to have a larger depth, if not, swap
        [u, v] = [v, u];
    }
    // to get u and v at the same level, move v up
    if(depth[u] !== depth[v]) {
        const depthDiff = depth[v] - depth[u];
        // move v up
        v = getKthAncestor(v, depthDiff, kthParent, maxDepth);
    }
    if(u==v) { // case where both node are originally in same subtree
        return u;
    }
    // now, u and v is at same level
    let l = 0;
    let r = maxDepth - 1;
    let m = 0;
    let res = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        const uParent = kthParent[u][m];
        const vParent = kthParent[v][m];
        if(uParent === vParent) {
            res = m;
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return kthParent[u][res];
}