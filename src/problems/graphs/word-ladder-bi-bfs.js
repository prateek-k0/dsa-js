/*
    word ladder

    https://leetcode.com/problems/word-ladder/description/

    Bi directional BFS version
*/
function calculateDistance(word1, word2) {
    let wordDistance = 0;
    for(let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) {
            wordDistance++;
        }
    }
    return wordDistance;
}

export function wordLadderBiBFS(beginWord, endWord, wordList) {
    // if endWord is not in wordList, return -1
    if(wordList.includes(endWord) === false) return 0;
    // if beginWord is not in the wordList, add it
    if(wordList.includes(beginWord) === false) {
        wordList.push(beginWord);
    }

    // construct adjList, for each word, its neighbours will be all the words in the list which are 1 distance apart
    const adjList = {};
    for(const word of wordList) {
        const neighbors = wordList.filter((w) => calculateDistance(word, w) === 1);
        adjList[word] = neighbors;
    }

    // bfs
    const q1 = [beginWord]; // queue for bfs from begin word;
    const q2 = [endWord];   // queue for bfs from end word;
    const v1 = { [beginWord]: true };  // visited 1, set visited of start word as true
    const v2 = { [endWord]: true };  // visited 2;, set visited of end word as true
    let steps = 1;  // steps to calculate the total number of times the queues were advanced, to calculate distane between start and end
    
    // advance bfs level by level
    const advanceBFSByLevel = (queue, visited1, visited2) => {
        // level by level traversal, traverse all nodes at current (step) level
        // at any point in the queue when this function is called, all nodes are at the same level
        // we'll enqueue the unvisited neighbours of this level, forming the next level.
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
                    visited1[nei] = true;    
                    queue.push(nei);
                }
            }
        }
    }

    // advance the smaller queue level by level, until we see a node thats visited by both
    while(q1.length > 0 && q2.length > 0) {
        let res = false;
        if(q1.length <= q2.length) {    // advance the smaller queue
            res = advanceBFSByLevel(q1, v1, v2);
        } else {
            res = advanceBFSByLevel(q2, v2, v1);
        }
        if(res === true) return steps + 1; 
        steps += 1;
    }
    return 0;
}