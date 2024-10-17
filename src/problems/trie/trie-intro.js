// https://leetcode.com/problems/implement-trie-prefix-tree/description/

class TrieNode {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

// iterative
export class TrieIterative {
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

    search(word) {
        let currentNode = this.root;
        const wordLen = word.length;
        for (let i = 0; i < wordLen; i++) {
            const char = word[i];
            if (currentNode.children[char] === undefined) return false;
            else currentNode = currentNode.children[char];
        }
        return currentNode.isWordEnd === true;
    }

    startsWith(word) {
        let currentNode = this.root;
        const wordLen = word.length;
        for (let i = 0; i < wordLen; i++) {
            const char = word[i];
            if (currentNode.children[char] === undefined) return false;
            else currentNode = currentNode.children[char];
        }
        return true;
    }
}

// recursive
class TrieRecursive {
    constructor() {
        this.root = new TrieNode();
    }

    insert = (word, charIndex = 0, node = this.root) => {
        if (charIndex === word.length) {
            node.isWordEnd = true;
            // console.log(JSON.stringify(this.root));
            return;
        };
        const char = word[charIndex];
        if (!node.children[char]) node.children[char] = new TrieNode();
        this.insert(word, charIndex + 1, node.children[char]);
    }

    search = (word, charIndex = 0, node = this.root) => {
        if (charIndex === word.length) {
            return node.isWordEnd;
        };
        const char = word[charIndex];
        if (!node.children[char]) return false;
        return this.search(word, charIndex + 1, node.children[char]);
    }

    startsWith = (word, charIndex = 0, node = this.root) => {
        if (charIndex === word.length) {
            return true;
        };
        const char = word[charIndex];
        if (!node.children[char]) return false;
        return this.startsWith(word, charIndex + 1, node.children[char]);
    }
}