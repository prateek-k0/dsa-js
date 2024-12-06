// https://leetcode.com/problems/word-search-ii/description/

class TrieNode {
    constructor(value = '') {
        this.children = {};
        this.isWordEnd = false;
        this.value = value; // value stores the char value that this node has
    }
}

class Trie {
    root = null;
    constructor() {
        this.root = new TrieNode('$');  // assume, '$' is the root char
    }
    insert(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (currentNode.children[char] === undefined) {
                currentNode.children[char] = new TrieNode(char);
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isWordEnd = true;
    }
}

export function wordSearch2(board, words) {
    const m = board.length;
    const n = board[0].length;
    const isInBound = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    // put all words in Trie
    const trie = new Trie();
    words.forEach((word) => {
        trie.insert(word);
    });

    const resSet = new Set();

    // use trieNode for iteration, pruning, if current char in trie is not equal to current cell,
    // do not process further
    const dfs = (r, c, trieNode, currWord = '') => {
        // base error conditions
        if (board[r][c] === '*') return;
        if (trieNode === undefined || trieNode.value !== board[r][c]) return;
        if (isInBound(r, c) === false) return;
        // success condition
        if (trieNode.isWordEnd === true) resSet.add(currWord);
        // visit this cell
        const temp = board[r][c];
        board[r][c] = '*'
        // traverse neighbours
        let char = ''
        if (isInBound(r, c + 1) === true) {
            char = board[r][c + 1];
            dfs(r, c + 1, trieNode.children[char], currWord + char)
        }
        if (isInBound(r, c - 1) === true) {
            char = board[r][c - 1];
            dfs(r, c - 1, trieNode.children[char], currWord + char)
        }
        if (isInBound(r + 1, c) === true) {
            char = board[r + 1][c];
            dfs(r + 1, c, trieNode.children[char], currWord + char)
        }
        if (isInBound(r - 1, c) === true) {
            char = board[r - 1][c];
            dfs(r - 1, c, trieNode.children[char], currWord + char)
        }
        // BACKTRACK, unvisit the node
        board[r][c] = temp;
    }

    // DFS on all cells, with backtracking to avoid revisiting cells during each DFS
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const trieRoot = trie.root;
            const char = board[r][c];
            dfs(r, c, trieRoot.children[char], char);
        }
    }

    return [...resSet.values()];
}