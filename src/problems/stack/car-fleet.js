/*
    Car Fleet
    https://leetcode.com/problems/car-fleet/description/

    to form a fleet, we need to first sort descending according to the position.
    a car catches up to another car and forms a fleet iff its time to target is <= to the car in front of it
*/

export function carFleet(target, position, speed) {
    const cars = position.map((cp, i) => [cp, speed[i]]).sort((a, b) => b[0] - a[0]);   // descending sort
    const st = [];
    for(let i = 0; i < cars.length; i++) {
        if(st.length === 0) {
            st.push([i]);
        } else {
            // calculate time to target for st.top and current car
            const top = st[st.length - 1];
            // since the fleet's frontmost car is also its slowest car, then speed and position of fleet is of the zeroth index of the fleet stored in the stack, thats why we use top[0]
            const timeToTargetTop = (target - cars[top[0]][0]) / cars[top[0]][1];
            const timeToTargetCurrent = (target - cars[i][0]) / cars[i][1];
            console.log(timeToTargetTop, timeToTargetCurrent);
            // see if time to target of top is >= that of the current, since we've sorted descending
            if(timeToTargetTop >= timeToTargetCurrent) {    // ie, top car is slower if it takes more time
                const lastFleet = st.pop();
                st.push(lastFleet.concat(i));
            } else {
                st.push([i]);
            }
        }
    }
    return st.length;
}