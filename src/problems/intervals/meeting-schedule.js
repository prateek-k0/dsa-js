export function canAttendMeetings(intervals) {
    // try merging the intervals, if size of merged intervals is less than that of the given intervals, return false
    intervals.sort((a, b) => a[0] - b[0]);  // sorting by start times
    const st = [];
    for(let i =  0; i < intervals.length; i++) {
        if(st.length === 0) {
            st.push(intervals[i]);
        } else {
            const topInterval = st[st.length - 1];
            if(topInterval[1] > intervals[i][0]) {
                st.pop();
                st.push([Math.min(intervals[i][0], topInterval[0]), Math.max(intervals[i][1], topInterval[1])]);
            } else {
                st.push(intervals[i]);
            }
        }
    }
    console.log(st);
    return st.length === intervals.length;
}