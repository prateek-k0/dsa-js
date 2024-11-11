/*
    Disjoint Set Union / Union Find
*/

class DisjointSetUnion {
  constructor(n) {
    this.parent = new Array(n); // parent[i] is the representative of the set containing i
    this.rank = new Array(n).fill(1); // for union by rank
    for (let i = 0; i < n; i++){// initially, they are all in a separate sets, single item sets
      this.parent[i] = i;
    }
  }

  find(x) { // find the representative(parent) of the set containing x
    if (x === this.parent[x])  // if x is its own parent,
      return x;
    const parent = this.find(this.parent[x]); // otherwise, check with its parent's parent
    this.parent[x] = parent; // backtrack, path compression, reduces the height of tree to reduce traversing times
    return parent;
  }

  union(x, y) { 
    let xRepresentative = this.find(x);
    let yRepresentative = this.find(y);
    if (xRepresentative === yRepresentative) // in the same set already
      return false;

    // else
    // Put smaller ranked item under bigger ranked item if ranks are different, path compression
    if (this.rank[xRepresentative] <= this.rank[yRepresentative]) {
      this.parent[xRepresentative] = yRepresentative;
      this.rank[yRepresentative] += this.rank[xRepresentative];
    }
    else {
      this.parent[yRepresentative] = xRepresentative;
      this.rank[xRepresentative] += this.rank[yRepresentative];
    }
    return true;
  }
}