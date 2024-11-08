// Minimum number of Straight Lines to connect all the given Points

// https://www.geeksforgeeks.org/minimum-number-of-straight-lines-to-connect-all-the-given-points/?ref=ml_lbp


/* 
Given 2d integer array arr[][] containing N coordinates each of type {X, Y}, 
the task is to find the minimum number of straight lines required to connect all 
the points of the array.
*/

/*
we can first sort the array according to x coordinate, then traverse the array of points, 
and calculate the slope for each consecutive points.

If the slope of current pair of points is same as the previous, then the points can be connected by the preivous line
else a new line must be drawn
*/

export function minStraightLines(points) {
    points.sort((a, b) => a[0] - b[0]); // sort according to x-coordinate
    if(points.length === 1) return 0;   // if only 1 point, no lines required

    let previousSlope = Infinity;
    let nLines = 0;
    for(let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i+1];
        const slope = (x2 - x1) / (y2 - y1);
        if(slope !== previousSlope) {    // if slope isnt as the previous slope, we need a new line
            previousSlope = slope;
            nLines++;
        }
    }
    return nLines;
}