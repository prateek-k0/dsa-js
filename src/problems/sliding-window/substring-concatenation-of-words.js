// https://leetcode.com/problems/substring-with-concatenation-of-all-words

export function substringConcatenation(s,words) {
    const wordLength = words[0].length;
    const totalLength = words.length * wordLength;  // max substring len
    const wordFreq = {};
    // store frequencies of the map
    for (let i = 0; i < words.length; i++) {
        wordFreq[words[i]] = (wordFreq[words[i]] ?? 0) + 1;
    }
    const result = [];
    // start
    for (let start = 0; start < wordLength; start++) {
        for (let i = start; i + wordLength - 1 < s.length; i += wordLength) {
            // sliding window
            let l = i;
            let r = i;
            // OPTIMIZATION: if the first word from start doesnt exists, dont go further
            if (wordFreq[s.slice(r, r + wordLength)] === undefined) continue;
            // OPTIMIZATION: if l is too close to the end
            if (l + totalLength > s.length) break;
            let substringLen = 0;
            // frequency map for current sliding window
            const currWordFreq = { ...wordFreq };
            while (r < s.length) {
                const currWord = s.slice(r, r + wordLength);
                if (currWordFreq[currWord] !== undefined && currWordFreq[currWord] > 0) {
                    currWordFreq[currWord] -= 1;
                    substringLen += currWord.length;
                    // only advance r if curr word is present in words, and used up before
                    r += wordLength;
                } else {    // else, break from the loop
                    break;
                }
            }
            // if all words are found, then push the start of the sliding window
            if (substringLen === totalLength) result.push(l);
        }
    }
    return result
}