// https://leetcode.com/problems/points-that-intersect-with-cars/

export function numberOfIntersectingPoints(nums) {
    // to return the number of integers, we need to save lines in an int space (like an array)
    // we dont need to sort nums, since we are storing in int array
    const lines = new Array(101).fill(0);   // since 1 <= starti <= endi <= 100
    for(const [start, end] of nums) {
        lines[start]++;
        lines[end + 1]--;   // since both start and end are covered by the car, we decrement the point after end
    }
    let countPoints = 0;    // to store total points covered by line
    let countLines = 0;     // to store the running count of lines
    // at any point, countLines >= 1, its covered by a car, hence increment countPoints
    for(let i = 1; i <= 100; i++) {
        countLines += lines[i];
        if(countLines > 0) countPoints++;
    }
    return countPoints;
};