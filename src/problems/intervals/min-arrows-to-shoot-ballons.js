// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/

export function findMinArrowShots(points) {
    // sort by end times
    points.sort((a, b) => a[1] - b[1]);
    // if 2 or more ballons can be shot by a single arrow, it forms a group
    // for each group, the end of the first ballon must be >= start of other ballons
    let arrowCount = 1;
    let prevEnd = points[0][1];    // initialize with end of first ballon
    // traverse from 2nd element
    for(let i = 1; i < points.length; i++) {
        // see if it is outside of group of previous, if yes, reset prevEnd
        if(points[i][0] > prevEnd) {
            arrowCount ++;
            prevEnd = points[i][1];
        }
    }
    return arrowCount;
};