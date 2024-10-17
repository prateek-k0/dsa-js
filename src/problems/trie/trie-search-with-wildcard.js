// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

// Trie with wildcard search

class TrieNode {
    children = {};
    isWordEnd = false;
}

export class TrieWithWildcard {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word = '') {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            const char = word[i];
            if(!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isWordEnd = true;
    }

    search(word = '', currentNode = this.root) {
        for(let i = 0; i < word.length; i++) {
            const char = word[i];
            if(char !== '.') {
                if(!currentNode.children[char]) return false;
                currentNode = currentNode.children[char];
            } else {
                let result = false;
                for(const node of Object.values(currentNode.children)) {
                    result = result || this.search(word.slice(i+1), node);
                }
                return result;
            }
        }
        return currentNode.isWordEnd === true;
    }
}