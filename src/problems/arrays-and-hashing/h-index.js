// https://leetcode.com/problems/h-index/

// Uses Counting Sort Algorithm
// TC: o(n^2);
export function findHIndex(citations) {
    // for each number of citation, add how many citations have been added to them atleast
    const citationsCount = new Array(citations.length + 1).fill(0);
    // Counting Sort
    for (let i = 0; i < citations.length; i++) {
        const num = citations[i];
        if (num !== 0) {
            for (let j = 1; j <= num && j <= citations.length; j++) {
                citationsCount[j] += 1;
            }
        }
    }
    let hIndex = 0;
    for (let i = 1; i <= citations.length; i++) {
        if (i <= citationsCount[i]) {
            hIndex = Math.max(i, hIndex)
        }
    }
    return hIndex;
}