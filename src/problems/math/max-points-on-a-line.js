// https://leetcode.com/problems/max-points-on-a-line/

function findSlope([x1, y1], [x2, y2]) {
    if((x1 - x2) === 0) return Infinity;
    return (y1 - y2) / (x1 - x2);
}

export function maxPointsOnALine(points) {
    if(points.length === 1) return 1;
    let res = 1;
    for(let i = 0; i < points.length; i++) {
        const slopes = {};
        for(let j = i + 1; j < points.length; j++) {
            // count the lines with same slope
            let slope = findSlope(points[i], points[j]);
            slopes[slope] = (slopes[slope] ?? 0) + 1;   
            res = Math.max(slopes[slope], res);
        }
    }
    return res + 1; // since we are counting lines, to count points, we add 1 more
    // since number of points with same slope = number of lines with same slope  + 1;
};