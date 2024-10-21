// https://leetcode.com/problems/non-overlapping-intervals/

export function eraseOverlapIntervals (intervals) {
    intervals.sort((a,b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    // intervals with closer ends are less likely to cause overlappings
    // so, at each overlap, only push the interval with lower end time
    const st = [];
    let overlappingCounter = 0;
    for(let i = 0; i < intervals.length; i++) {
        if(st.length === 0) {
            st.push(intervals[i]);
        } else {
            const top = st[st.length - 1];
            if(top[1] > intervals[i][0]) {  // overlapping
                st.pop();
                overlappingCounter++;
                // push the interval with lower end time
                if(intervals[i][1] < top[1]) {
                    st.push(intervals[i]);
                } else {
                    st.push(top);
                }
            } else {
                st.push(intervals[i]);
            }
        }
    }
    return overlappingCounter;
};