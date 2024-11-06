// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

/*
    LCA of binary tree, given in the format of  objects:
     function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
*/

const nodes = {};
const depth = {};
const parent = {};
const kthAncestor = {};
const maxPow = Math.ceil(Math.log2(1e5)) + 1;

// remember, every node has a unique value (.val attribute), so we can use it to identify the nodes
// use an object to store the nodes, with node.val as keys
export function lowestCommonAncestor(root, u, v) {
    storeDataDFS(root);
    storeKthParents();
    const lca = getLCA(u, v);
    // binary search version
    // const lca = getLCABinarySearch(u, v);
    console.log(lca);
}

function storeDataDFS(node, d = 0, p = -1) {
    nodes[node.val] = node;
    depth[node.val] = d;
    parent[node.val] = p;
    kthAncestor[node.val] = new Array(maxPow).fill(-1);
    node.left !== null && storeDataDFS(node.left, d+1, node.val);
    node.right !== null && storeDataDFS(node.right, d+1, node.val);
}

function storeKthParents() {
    const nodelist = Object.keys(nodes).map((node) => +node);  // convert to num, since keys in objects are converted to strings
    for(let i = 0; i < maxPow; i++) {
        for(const j of nodelist) {
            if(i === 0) {
                kthAncestor[j][i] = parent[j];
            } else {
                if(kthAncestor[j][i-1] !== -1) {
                    kthAncestor[j][i] = kthAncestor[kthAncestor[j][i-1]][i-1];
                }
            }
        }
    }
}

function getKthAncestor(node, k) {
    let kth = node;
    for(let i = 0; i < maxPow; i++) {
        if(((1 << i) & k) !== 0) {
            kth = kthAncestor[kth][i];
            if(kth === -1) break;
        }
    }
    return kth;
}

function getLCA(u, v) {
    let nodeU = u.val;
    let nodeV = v.val;
    if(depth[nodeU] > depth[nodeV]) {
        [nodeU, nodeV] = [nodeV, nodeU];
    }
    const depthDiff = depth[nodeV] - depth[nodeU];
    if(depthDiff !== 0) nodeV = getKthAncestor(nodeV, depthDiff);
    if(nodeU === nodeV) return nodes[nodeU];
    for(let i = maxPow - 1; i > -1; i--) {
        const parentU = kthAncestor[nodeU][i];
        const parentV = kthAncestor[nodeV][i];
        if(parentU === parentV) {
            continue;
        }
        nodeU = parentU;
        nodeV = parentV;
    }
    return nodes[parent[nodeU]];
}

function getLCABinarySearch(u, v) {
    let nodeU = u.val;
    let nodeV = v.val;
    if(depth[nodeU] > depth[nodeV]) {
        [nodeU, nodeV] = [nodeV, nodeU];
    }
    const depthDiff = depth[nodeV] - depth[nodeU];
    if(depthDiff !== 0) nodeV = getKthAncestor(nodeV, depthDiff);
    if(nodeU === nodeV) return nodes[nodeU];
    
    // lower bound = 0, upper bound = maxPow - 1;
    let l = 0;
    let r = maxPow - 1;
    let m = 0;
    let res = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        const parentU = kthAncestor[nodeU][m];
        const parentV = kthAncestor[nodeV][m];
        if(parentU === parentV) {
            res = m;
            r = m-1;
        } else {
            l = m+1;
        }
    }
    return nodes[kthAncestor[nodeU][res]];
}