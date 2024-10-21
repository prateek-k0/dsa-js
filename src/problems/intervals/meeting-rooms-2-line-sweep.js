// Line sweep algorithm: https://leetcode.com/discuss/study-guide/2166045/line-sweep-algorithms

export class MeetingRoom2_LS {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(numIntervals) {
        const lines = {};   // for line-sweep algorithm
        // let numIntervals = intervals.map((a) => ([a.start, a.end]));
        for(let i = 0; i < numIntervals.length; i++) {
            // for inclusive intervals, add 1 to both start and end, else add 1 to start and subtract 1 from end
            lines[numIntervals[i][0]] = (lines[numIntervals[i][0]] ?? 0) + 1;
            lines[numIntervals[i][1]] = (lines[numIntervals[i][1]] ?? 0) - 1;     // exclusive interval -> [0,4] and [4,5] do not overlap
        }
        let count = 0;
        let days = 0;
        console.log(lines);
        for(const lineVal of Object.values(lines)) {
            count = count + lineVal;    // stores cumulative count of running meetings on each day
            days = Math.max(days, count);   // for overlapping meeting, count > 1
        }
        return days;
    }
}