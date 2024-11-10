// https://leetcode.com/problems/jump-game-iv/description/

/*
    We can use bfs for this: 
    for each index i, the neighbours would be:
    i - 1,
    i + 1,
    and all occurrences of nums[i], excluding i.
*/
// also try using linked list queue from min-obstacles-to-reach-end.js for faster times
export function jumpGame4(nums) {
    const occurrences = new Map();
    const isInBounds = (i) => (i > -1 && i < nums.length);
    const visited = {};
    // optimization
    // start from reverse, since we need to prioritize further indices and have them first
    for(let i = nums.length - 1; i > -1; i--) { 
        if(occurrences.has(nums[i]) === false) {
            occurrences.set(nums[i], []);
        }
        occurrences.get(nums[i]).push(i);
    }
    // bfs
    const q = [[0, 0]];   // [index, current-number-of-jumps]
    visited[0] = true;  // mark 1st index as visited
    while(q.length > 0) {
        const [index, jumps] = q.shift();
        if(index === nums.length - 1) return jumps;
        // else, enqueue its neighbours
        const occOfNum = occurrences.get(nums[index]) ?? [];  // occurrences of num[index]
        for(const j of occOfNum) {
            if(visited[j] !== true && (j !== index) && (j !== index+1) && (j !== index-1)) {
                if(j === nums.length - 1) return jumps + 1; // optimization, if last index is found, return early to avoid TLE
                visited[j] = true;
                q.push([j, jumps+1]);
            }
        }
        occurrences.delete(nums[index]);    // optimization: if nums[i] is already used, then to avoid revisiting, delete it from occurrences map
        if(isInBounds(index-1) === true && visited[index-1] !== true) {
            if((index + 1) === nums.length - 1) return jumps + 1;   // optimization, if last index is found, return early to avoid TLE
            visited[index-1] = true;
            q.push([index-1, jumps+1]);
        }
        if(isInBounds(index+1) === true && visited[index+1] !== true) {
            if((index + 1) === nums.length - 1) return jumps + 1; // optimization, if last index is found, return early to avoid TLE
            visited[index+1] = true;
            q.push([index+1, jumps+1]);
        }
    }
    return -1;
}