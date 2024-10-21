// bisect left
function bisectLeftInterval(arr, key) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m][0] > key[0]) {    // first check with start time
            r = m - 1
        } else if(arr[m][0] < key[0]) {
            l = m + 1;
        } else {    // if both are same, then check with end times
            if(arr[m][1] >= key[1]) r = m - 1;  // if both are same, move left, since we are finding bisect left
            else l = m + 1;
        }
    }
    return l;
}

function mergeIntervals(intervals) {
    const st = [];
    for(let i = 0; i < intervals.length; i++) {
        if(st.length === 0) {
            st.push(intervals[i]);
        } else {
            const top = st[st.length - 1];  
            if(top[1] >= intervals[i][0]) { // end of top >= start of current, then theirs an overlap
                st.pop();
                st.push([Math.min(top[0], intervals[i][0]), Math.max(top[1], intervals[i][1])]);
            } else {
                st.push(intervals[i]);
            }
        }
    }
    return st;
}

export function insertInterval(intervals = [], newInterval) {
    const newIndex = bisectLeftInterval(intervals, newInterval);
    intervals.splice(newIndex, 0, [...newInterval]);
    return mergeIntervals(intervals);
}

