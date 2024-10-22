// https://leetcode.com/problems/car-pooling/

export function carPooling(trips, capacity) {
    const lines = {};
    // for each line, increment and decrement by capacity
    for(const [c, x1, x2] of trips) {
        lines[x1] = (lines[x1] ?? 0) + c;
        lines[x2] = (lines[x2] ?? 0) - c;
    }
    let capacityCount = 0;
    // for each trip, seet if running capacityCount exceeds capacity, if it does, return false;
    for(const c of Object.values(lines)) {
        capacityCount += c;
        if(capacityCount > capacity) {
            return false;
        }
    }
    return true;
};