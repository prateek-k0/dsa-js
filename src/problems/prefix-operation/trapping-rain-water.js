/*
Trapping rainwater problem

https://leetcode.com/problems/trapping-rain-water/description/

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

We can use prefix max and suffix max for each bar, and see if the current bar is taller than the min(prefix[bar], suffix[bar]), if not, then it can store water
*/

export function trappedRainWater(heights) {
    const prefixMax = new Array(heights.length).fill(0);
    const suffixMax = new Array(heights.length).fill(0);
    // calculate max to either side of the current bar
    // prefix max
    let max = 0;
    for(let i = 1; i < heights.length; i++) {
        prefixMax[i] = Math.max(prefixMax[i-1], heights[i-1]);
    }
    // suffix max
    max = 0;
    for(let i = heights.length - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i+1], heights[i+1]);
    }
    // calculate total trapped water
    let totalTrappedWater = 0;
    for(let i = 0; i < heights.length; i++) {
        const minimumMaxEitherSide = Math.min(prefixMax[i], suffixMax[i]);
        if(minimumMaxEitherSide > heights[i]) { // can store water iff minimum of maxes on both sides is greater than height of the current bar
            totalTrappedWater += (minimumMaxEitherSide - heights[i]);
        }
    }
    return totalTrappedWater;
}