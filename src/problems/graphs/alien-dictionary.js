/*
    https://neetcode.io/problems/foreign-dictionary

    Solution: https://algo.monster/liteproblems/269
    https://www.cnblogs.com/grandyang/p/5250200.html
*/
export function alienDict(wordList) {   // word list is sorted lexicographically
    const getCharCode = (c) => c.charCodeAt(0) - 97;
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const adjList = new Array(26).fill(0).map((r) => new Array(0).fill(0));
    const uniqCharSet = new Set();
    // compare each word with its next one, except the last one
    for(let i = 0; i < wordList.length - 1; i++) {
        const prevWord = wordList[i];
        const nextWord = wordList[i+1];
        // enqueue chars of prevWord to uniqCharSet
        for(const c of prevWord) uniqCharSet.add(c);
        // find the first char in prevWord and nextWord thats not equal
        // we found such a char, add an edge between them
        let min = Math.min(prevWord.length, nextWord.length);
        let j = 0;
        for(j = 0; j < min; j++) {
            
            if(prevWord[j] !== nextWord[j]) {
               const prevCharCode = getCharCode(prevWord[j]);
               const nextCharCode = getCharCode(nextWord[j]);
               
               adjList[prevCharCode].push(nextCharCode);
               break;
            }
        }
        // if no differenct char is found, and length od nextWord is smaller than length of prevWord,
        // then, it must mean that the next word is a prefix of the first word, which cannot be
        // possible, since wordList is lexicographically sorted
        if(j === min && nextWord.length < prevWord.length) {
            return '';
        }
    }
    // for last word
    for(const c of wordList[wordList.length - 1]) uniqCharSet.add(c);
    // create indegree for each element
    const inDegree = new Array(26).fill(0);
    for(let i = 0; i < 26; i++) {
        for(const nei of adjList[i]) {
            inDegree[nei]++;
        }
    }
    // run topological sort (kahn's algorithm)
    const q = [];
    const res = [];
    for(let i = 0; i < 26; i++) {
        if(inDegree[i] === 0 && uniqCharSet.has(chars[i])) {
            q.push(i);
        }
    }
    while(q.length > 0) {
        const node = q.shift();
        res.push(node);
        // push its neighbours
        for(const nei of (adjList[node] ?? [])) {
            inDegree[nei]--;
            if(inDegree[nei] === 0) {
                q.push(nei);
            }
        }
    }
    return res.length === uniqCharSet.size ? res.map((i) => chars[i]).join('') : ''
}