// https://leetcode.com/problems/jump-game-ii/description/

/*
    similar to jump game 1, just keep count of number of jumps (number of iterations to the end)
*/

export function jumpGame2(nums) {
    if (nums[0] === 0 && nums.length > 1) return -1;
    if (nums.length === 1) return 0;
    let jumps = 0;
    let currentReach = 0;
    let currentIndex = 0;
    while (currentIndex < nums.length - 1) {
        currentReach = currentIndex + nums[currentIndex];   // update currentReach
        jumps++;    // update jumps
        if (currentReach >= nums.length - 1) break;  // if end position is already reached.
        let maxReach = 0;
        let maxIndex = currentIndex;
        for (let i = currentIndex + 1; i <= currentReach && i < nums.length; i++) {
            let reach = i + nums[i];
            if (reach > maxReach) {
                maxReach = reach;
                maxIndex = i;
            }
        }
        if (maxIndex === currentIndex) return -1;
        currentIndex = maxIndex;
    }
    return jumps;
}