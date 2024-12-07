// https://leetcode.com/problems/extra-characters-in-a-string/description/

class TrieNode {
    constructor(value = '', wordLength = 0) {
        this.children = {};
        this.isWordEnd = false;
    }
}

// iterative
export class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currentNode = this.root;
        const wordLen = word.length;
        for (let i = 0; i < wordLen; i++) {
            const char = word[i];
            if (currentNode.children[char] === undefined) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isWordEnd = true;
    }
}

export function minExtraChars(str, dict) {
    const trie = new Trie();
    const trieRoot = trie.root;
    for(const word of dict) {
        trie.insert(word);
    }
    const dp = new Array(55).fill(-1);
    const memoize = (index) => {
        if(index === str.length) return 0;
        if(dp[index] !== -1) return dp[index];
        // skip curr char 
        const skip = 1 + memoize(index + 1);
        // then, see if there exists a substring in the dict from rane i...len
        let consider = Infinity;
        let currTrieNode = trieRoot
        for(let j = index; j < str.length; j++) {
            // current substring is str[i...j];
            // if current char is not present in trie, break
            if(currTrieNode.children[str[j]] === undefined) break;
            currTrieNode = currTrieNode.children[str[j]];
            // else, if char exits and the current substring is a word in trie (isWordEnds === true)
            if(currTrieNode.isWordEnd === true) consider = Math.min(consider, memoize(j + 1));
        }
        dp[index] = Math.min(skip, consider);
        return dp[index];
    }
    return memoize(0);
}