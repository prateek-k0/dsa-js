// https://leetcode.com/problems/partition-labels/

// with intervals, for other variation, use greedy solution

export function partitionString(str) {
    const firstOccurrences = {};
    const lastOccurrences = {};
    for(let i = 0; i < str.length; i++) {
        if(firstOccurrences[str[i]] === undefined) {    // store first occurrences
            firstOccurrences[str[i]] = i;
        }
        lastOccurrences[str[i]] = i;    // store last occurrences
    }
    // create intervals
    const intervals = [];
    for(const key in firstOccurrences) {
        intervals.push([firstOccurrences[key], lastOccurrences[key]]);
    }
    // use interval merging / linesweep
    const st = [];
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    for(let i = 0; i < intervals.length; i++) {
        if(st.length === 0) {
            st.push(intervals[i]);
        } else {
            const top = st[st.length - 1];
            if(top[1] > intervals[i][0]) {
                st.pop();
                st.push([Math.min(top[0], intervals[i][0]), Math.max(top[1], intervals[i][1])]);
            } else {
                st.push(intervals[i]);
            }
        }
    }
    return st.map((i) => (i[1] - i[0] + 1));
}