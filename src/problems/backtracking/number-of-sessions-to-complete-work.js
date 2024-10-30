// https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/

export function minSessionsToCompleteWork(tasks, sessionTime) {
    // sort the array in reverse
    tasks.sort((a, b) => b - a);
    // binary search over all possible number of sessions
    // min number of sessions = 1,  all tasks in 1 sessions
    // max number of sessions = tasks.length, 1 session for each task
    // we need to minimize the number of sessions for the given session time
    let l = 1;
    let r = tasks.length;
    let m = 1;
    let ans = 1;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        const sessionBuckets = new Array(m).fill(0);
        if(checkIfSessionsPossible(tasks, sessionTime, sessionBuckets, 0) === true) {
            ans = m;
            r = m - 1;  // minimize
        } else {
            l = m + 1;
        }
    }
    return ans;
}
// backtrack
function checkIfSessionsPossible(tasks, sessionTime, sessionBuckets, currentIndex = 0) {
    if(currentIndex === tasks.length) return true;

    // traverse for further indices and backtrack
    for(let i = 0; i < sessionBuckets.length; i++) {
        if(sessionBuckets[i] + tasks[currentIndex] <= sessionTime) {    // if current task can be inserted in to the current bucket
            sessionBuckets[i] += tasks[currentIndex];
            const results = checkIfSessionsPossible(tasks, sessionTime, sessionBuckets, currentIndex + 1);
            if(results === true) return true;
            // backtrack
            sessionBuckets[i] -= tasks[currentIndex];
            // if we dont return true, and current bucket is 0, (if not used by this task), then we're not going to reach the answer
            if(sessionBuckets[i] === 0) return false;
        }
    }
    return false;
}