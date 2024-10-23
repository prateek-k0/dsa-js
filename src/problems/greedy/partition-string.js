// https://leetcode.com/problems/partition-labels/

// greedy solution

export function partitionString(str) {
    const lastOccurrences = {};
    for(let i = 0; i < str.length; i++) {
        lastOccurrences[str[i]] = i;    // store last occurrences
    }
    
    const sizes = [];
    let currentStart = 0;   // to store the start of the window
    let currentEnd = 0; // to store the max size of the window
    for(let i = 0; i < str.length; i++) {
        currentEnd = Math.max(currentEnd, lastOccurrences[str[i]]);
        if(i === currentEnd) {
            sizes.push(currentEnd - currentStart + 1);
            currentStart = i+1;
        }
    }
    return sizes;
}