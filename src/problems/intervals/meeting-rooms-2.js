// https://neetcode.io/problems/meeting-schedule-ii

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class MeetingRoom2 {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let numIntervals = intervals.map((a) => ([a.start, a.end]));
        numIntervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
        let requiredDays = 0;
        let overlappingIntervals = numIntervals;
        while(overlappingIntervals.length > 0) {
            overlappingIntervals = this.seggregateIntervals(overlappingIntervals);
            requiredDays++;
        }
        return requiredDays;
    }

    seggregateIntervals(intervals) {
        // check if the intervals are overlapping
        const overlapping = [];
        const nonOverlapping = [intervals[0]];  // push the first one in non overlapping, since the first one is always non overlapping
        for(let i = 1; i < intervals.length; i++) { // can use this, since its sorted
            const curr = intervals[i];
            const prev = nonOverlapping[nonOverlapping.length - 1];
            if(prev[1] > curr[0]) { // overlapping
                overlapping.push(curr);
            } else {
                nonOverlapping.push(curr);
            }
        }
        return overlapping;
    }
}