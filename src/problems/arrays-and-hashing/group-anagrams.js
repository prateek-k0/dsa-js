/*
Given an array of strings strs, group the anagrams together.
https://leetcode.com/problems/group-anagrams/description/

Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

export function groupAnagrams(strings = []) {
    const anagramsHash = {};
    const emptyStrings = [];    // for "", since they cant be stored as keys in object, cuz they are empty
    // sort each string and store it in the hasnmap
    strings.forEach((str) => {
        if(str === '') return;
        const sortedString = str.split('').sort((a, b) => a.localeCompare(b)).join('');
        anagramsHash[sortedString] = [];
    });
    // traverse each string and see if its sorted hash is in the hashmap
    strings.forEach((str) => {
        if(str === '') {
            emptyStrings.push(str);
            return;
        }
        const sortedString = str.split('').sort((a, b) => a.localeCompare(b)).join('');
        if(anagramsHash[sortedString] !== undefined) {
            anagramsHash[sortedString] = anagramsHash[sortedString].concat(str);
        }
    });
    return emptyStrings.length > 0 ? Object.values(anagramsHash).concat([emptyStrings]) : Object.values(anagramsHash);
}