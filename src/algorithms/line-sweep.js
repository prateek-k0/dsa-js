// https://leetcode.com/discuss/study-guide/2166045/line-sweep-algorithms

/*
    Line sweep algo: useful for interval-based problems
    
    Why Sorting with endTimes Works
    In many of the problem above we do sorting with endTime , this is an important concept to understand,
    if you sort with endTime and then check other intervals you can easily find non-overlapping intervals like this, here prev is previous interval.

    if(intervals[i][0] < intervals[prev][1])

    Reason is if a new interval start is before previous end time that means a sure overlap.
    While on the other hand if we sort by startTime, we dont know when this interval gonna end, there will be overlaps.
    Here are some additional points to consider:

    Sorting by end time is a greedy algorithm. This means that it makes the best possible choice at each step, without considering the future. As a result, it is usually more efficient than sorting by start time.
    Sorting by start time is a dynamic programming algorithm. This means that it makes a choice at each step, based on the choices that it has made in the past. As a result, it is usually more robust to errors in the input data.
*/

// general structure:
function lineSweep(intervals) {
    const lines = {};   // we use an object, since number keys are stored in sorted order
    for(const interval of intervals) {
        lines[interval[0]] = (lines[interval[0]] ?? 0) + 1; // on start, increment number of lines
        lines[interval[1]] = (lines[interval[1]] ?? 0) - 1; // on end, decrement number of lines
        // for exclusive intervals [start, end), decreament lines at end, else decrement line at end - 1 (or end + 1);
    }
    // then, count the number of lines from Object.values(lines);
    let count = 0;
    for(let line of Object.values(lines)) {
        count += line;
        // if at any point, count > 1, then there is an overlap.
    }
}