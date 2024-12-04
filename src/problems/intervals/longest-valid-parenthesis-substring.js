// https://leetcode.com/problems/longest-valid-parentheses/description/

/*
    Solution with stacks
    For DP solution, check dp-1d section

    We can do it with line-sweep / interval merging
    create intervals with the help of a stack
*/

export function longestValidParenthesesSubstrings(str) {
    const st = [];
    // create intervals first
    const intervals = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') st.push(i);
        else {
            if(st.length > 0) {
                const top = st[st.length - 1];
                st.pop();
                intervals.push([top, i]);   // intervals = [[start1, end1], [start2, end2], ...]
            }
        }
    }
    // use line sweep to calculate largest interval
    const lines = {};
    let maxLen = 0;
    let lineCount = 0;
    let lineStart = 0;
    for(const [start, end] of intervals) {
        lines[start] = (lines[start] ?? 0) + 1;
        lines[end + 1] = (lines[end + 1] ?? 0) - 1; // end + 1, since [i, j] and [j+1, k] can form valid interval if [i, k] , for ex, ()() has a valid string of 4
    }
    for(let i = 0; i < str.length + 1; i++) {
        if(lines[i] !== undefined) {
            if(lineCount === 0) lineStart = i;  // reset start if no lines are present at index i of the string
            lineCount += lines[i];
            if(lineCount === 0) maxLen = Math.max(i - lineStart, maxLen);   // if count becomes 0, then we have an interval
        }
    }
    return maxLen;
}