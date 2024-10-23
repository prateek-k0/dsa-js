// https://leetcode.com/problems/jump-game/description/


/*
    for every element, check each element whithin its reach, and greedily pick element with the largest reach
*/

export function jumpGame(nums) {
    if(nums[0] === 0 && nums.length > 1) return false; // cannot jump further
    if(nums.length === 1) return true;  // already at last position
    let currentReach = 0;   // initialize at 0
    let currentIndex = 0;   // initialize at first element
    while(currentIndex < nums.length - 1) {
        currentReach = currentIndex + nums[currentIndex];   // update current reach = currentIndex + reach at currentIndex(= nums[currentIndex])
        let maxReach = 0;   // to store maxReack
        let maxIndex = currentIndex;    // to store index with maxReach
        for(let i = currentIndex + 1; i <= currentReach && i < nums.length; i++) { // traverse all elements from current index to its reach
            let reach = i + nums[i];    // calculate current reach
            if(reach > maxReach) {  // greedy check if current reach is greater than max reach, if yes, greedily store maxIndex
                maxReach = reach;
                maxIndex = i;
            }
        }
        if(maxIndex === currentIndex) return false; // if maxIndex is unchanged, then last position cannot be reached.
        else currentIndex = maxIndex;   // update currentIndex.
    }
    return true;
}