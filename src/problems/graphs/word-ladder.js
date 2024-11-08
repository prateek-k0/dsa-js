// word ladder

// https://leetcode.com/problems/word-ladder/description/

/*
    We can use BFS for this
    At every iteration, we need to find out words that are 1 distance apart
    beginWord, endWord, and all words in wordList have the same length

    Time Complexity: O((m*n) ^ 2), since we are checking every word for distance during 
    creation of adjacency list

    bfs time complexity: o(n ^ 2);
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

export function wordLadder(beginWord, endWord, wordList) {
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
    const visited = {};
    const queue = [[beginWord, 1]];    // start from 1, since combo sequence also includes beginWord
    while(queue.length > 0) {
        const [word, distance] = queue.shift();
        if(visited[word] === true) continue;
        // true condition
        if(word === endWord) {
            return distance;
        }
        // else, check its neighbours
        visited[word] = true;
        for(const neighbor of (adjList[word] ?? [])) {
            queue.push([neighbor, distance + 1]);
        }
    }
    // if not returned before, not combo exists
    return 0;
}