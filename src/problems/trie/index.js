import { TrieIterative } from "./trie-intro";
import { TrieWithWildcard } from "./trie-search-with-wildcard";
import { wordSearch2 } from "./word-search-2";


// const trie = new TrieIterative();

// trie.insert('apple');
// console.log(trie.search('apple'));

// const trie = new TrieWithWildcard();
// trie.addWord('bad');
// trie.addWord('dad');
// trie.addWord('mad');
// trie.addWord('pad');
// console.log(trie.search('b..'), trie.search('....'));

console.log(wordSearch2([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]))