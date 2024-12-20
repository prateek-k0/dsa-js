// https://leetcode.com/problems/minimum-genetic-mutation

const checkDistance = (w1, w2) => {
    let changes = 0;
    for(let i = 0; i < w1.length; i++) {
        if(w1[i] !== w2[i]) changes++;
        if(changes >= 2) return false;
    }
    return changes === 1;
}

// normal BFS
export function geneticMutation(startGene, endGene, bank) {
    const visited = {};
    visited[startGene] = true;
    const q = [[startGene, 0]]; // current seq, steps from start
    while(q.length > 0) {
        const [gene, steps] = q.shift();
        if(gene === endGene) return steps;
        // else
        const neighbours = bank.filter((word) => checkDistance(gene, word));
        for(const nei of neighbours) {
            if(visited[nei] !== true) {
                visited[nei] = true;
                q.push([nei, steps + 1]);
            }
        }
    }
    return -1;
};

// Bi - BFS
export function geneticMutationBiBFS(startGene, endGene, bank) {
    if(startGene === endGene) return 0;
    if(bank.indexOf(endGene) === -1) return -1;
    const v1 = {};  // v1 = visited from source, q1 = BFS queue from source
    v1[startGene] = true;
    const q1 = [startGene];

    const v2 = {};  // v2 = visited from target, q2 = BFS queue from target
    v2[endGene] = true;
    const q2 = [endGene];

    const advanceBFS = (q, v1, v2) => {
        const levelSize = q.length;
        for(let i = 0; i < levelSize; i++) {
            const gene = q.shift();
            const neighbours = bank.filter((word) => checkDistance(gene, word));
            for(const nei of neighbours) {
                if(v1[nei] !== true) {
                    if(v2[nei] === true) return true;
                    v1[nei] = true;
                    q.push(nei)
                }
            }
        }
        return false;
    }
    let steps = 0;
    while(q1.length > 0 && q2.length > 0) {
       let res = false;
       if(q1.length <= q2.length) { // advance the smaller queue
            res = advanceBFS(q1, v1, v2);
       } else {
            res = advanceBFS(q2, v2, v1);
       }
       if(res === true) return steps+1;
       steps++;
    }
    return -1;
}