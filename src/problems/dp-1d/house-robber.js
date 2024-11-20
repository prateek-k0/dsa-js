// https://leetcode.com/problems/house-robber/description/

// brute force (o(2 ^ n)), 2 is the number of recursive calls per recursion
function houseRobberBruteforce(nums) {
    const dp = new Array(nums.length + 1).fill(0);
    const findMaxLoot = (currIndex = 0, currLoot = 0, previncluded = false) => {
        if(currIndex > nums.length) return;
        dp[currIndex] = Math.max(dp[currIndex], currLoot);
        // include in loot, if previous / adjacent is not included
        if(previncluded === false) findMaxLoot(currIndex+1, currLoot + nums[currIndex], true);
        // exclude and move to next
        findMaxLoot(currIndex+1, currLoot, false);
    }
    findMaxLoot();
    return dp[nums.length - 1];
}

// with dp
// for ever house, maxLoot[i] = Math.max(maxLoot[i-1](exclude current house), maxLoot[i-2] + money[i](include current and previous to previous house))
// o(n) solution
export function houseRobberDP(nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(dp[0], nums[1]);   // exclude the first house and choose 0th house, or include first house only
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length - 1];
}