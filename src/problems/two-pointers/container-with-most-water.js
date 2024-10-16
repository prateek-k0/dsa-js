/*
    Container with most water
    https://leetcode.com/problems/container-with-most-water/description/

    we can use 2 pointers for this approach:
    if (height[l] < height[r]), l++;
    if(height[l] > height[r]), r--;
    if(height[l] === height[r]), l++; r--;
    keep track of max area at each step
*/

export function containerWithMostWater(height = []) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while(l < r) {  // if l === r, area is 0 anyway, so no need to iterate
        const containerHeight = Math.min(height[l], height[r]);
        const containerWidth = r - l;
        max = Math.max(max, containerHeight * containerWidth);  // storing max area
        if(height[l] === height[r]) {
            l++;
            r--;
        } else if(height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
}