// https://leetcode.com/problems/count-vowel-strings-in-ranges/

/*
    For each string, check if its a vowel string or not, and mark 1 or 0 at its index in another array
    then store its prefix sum

    for range queries, usre prefix-sum[r] - prefix-sum[l];
*/

export function countVowelStrings(words, queries) {
    const vowels = new Set(['a','e','i','o','u']);
    // to save if words[i] is a vowel string
    const vowelWords = new Array(words.length).fill(0);
    for(let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if(vowels.has(currentWord[0]) && vowels.has(currentWord[currentWord.length - 1])) {
            vowelWords[i] = 1;
        }
    }
    // store prefix sum
    const prefixSumWords=  new Array(words.length + 1).fill(0); // non inclusive prefix sum, ie, prefix-sum[i] = prefix-sum[i+1] + arr[i+1]
    let prefixSum = 0;
    for(let i = 0; i < words.length; i++) {
        prefixSum += vowelWords[i];
        prefixSumWords[i + 1] = prefixSum;
    }
    console.log(vowelWords, prefixSumWords);
    // range query: prefix-sum[r] - prefix-sum[l];
    const result = [];
    for(let i = 0; i < queries.length; i++) {
        let [l, r] = queries[i];
        // since both r
        result.push(prefixSumWords[r + 1] - prefixSumWords[l]); // since we are using non inclusive prefix sum
    }
    return result;
}