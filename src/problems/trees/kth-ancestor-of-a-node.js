// kth ancestor (binary lifting)

// https://leetcode.com/problems/kth-ancestor-of-a-tree-node/description/

export class TreeAncestor {
    parent = [];
    kthParent = [];
    depth = [];

    logBase2(n) {
        return Math.ceil(Math.log2(n));
    }

    constructor(n, parent) {    // n can be upto 1e5, log(n) = 10;
        this.parent = parent;
        this.depth = new Array(n).fill(0);
        // initialize kth parent
        this.kthParent = new Array(n).fill(0);
        for(let i = 0; i < n; i++) {
            this.kthParent[i] = new Array(this.logBase2(n) + 1).fill(-1);   // default value is -1
        }
        this.storeDepths();
        this.storeParents();
    }

    storeDepths() { // since parent for each node is given, we dont need dfs
        // for root
        this.depth[0] = 0;
        for(let i = 1; i < this.parent.length; i++) {
            this.depth[i] = this.depth[this.parent[i]] + 1;
        }
    }

    storeParents() {
        for(let i = 0; i < this.logBase2(this.parent.length) + 1; i++) {
            for(let j = 0; j < this.parent.length; j++) {
                if(i === 0) {
                    this.kthParent[j][i] = this.parent[j];
                } else {
                    if(this.kthParent[j][i-1] !== -1) {  // since the default value is -1, we need to perform this check
                        this.kthParent[j][i] = this.kthParent[this.kthParent[j][i-1]][i-1];
                    }
                }
            }
        }
    }

    getKthAncestor(node, k) {
        const maxPow = this.logBase2(this.parent.length) + 1;
        let kthAncestor = node;
        for(let i = 0; i < maxPow; i++) {
            if(((1 << i) & k) !== 0) {
                kthAncestor = this.kthParent[kthAncestor][i];
                if(kthAncestor === -1) break;
            }
        }
        return kthAncestor;
    }
}