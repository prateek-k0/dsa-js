// https://leetcode.com/problems/maximum-population-year/description/

export function maximumPopulationYear(logs) {
    // sort the logs with start year
    logs.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    // line sweep
    const lines = {};
    for(const [start, end] of logs) {
        lines[start] = (lines[start] ?? 0) + 1;
        lines[end] = (lines[end] ?? 0) - 1;
    }
    // to keep the running count of the lines
    let count = 0;
    // to store the max count of years
    let max = 0;
    let maxYear = 0;
    for(const [startYear, line] of Object.entries(lines)) {
        count += line;
        if(count > max) {
            max = count;
            maxYear = +startYear;   // convert key to number, since keys are stored as strings in objects
        }
    }
    return maxYear;
}