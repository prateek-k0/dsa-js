// https://www.geeksforgeeks.org/minimum-length-of-wire-needed-to-connect-all-points-who-have-value-as-0-with-at-least-one-point-with-value-1/

// Minimum length of wire needed to connect all points who have value as 0 with at least one point with value 1.

/*

Given two arrays Point[] and Value[] of length N, where Point[] represents the position of N 
points on a horizontal line. Then your task is to output the minimum length of line needed to 
connect all points having Value[i] = 0 with at least one point having Value[i] = 1, 
directly or indirectly

Note: There will be at least one point with value = 1.


Input: N = 6, Points[] = {1, 5, 6, 7, 11, 14}, Values[] = {1, 0, 0, 0, 1, 0} 
Output: 9

Input: N = 5, Points[] = {5, 12, 15, 19, 32}, Values = {1, 0, 0, 1, 0}
Output: 20

We can solve this by using sliding window technique:

- In each window, shift the window to a group of 0's, such that there is no 1's in between them
for example, 1 0 0 0 1 0, the window must be from index 1 (first 0) to index 3 
(last consecutive 0 from the starting of the window). We'll call this an island of 0's
- For each island, there must be 1's on both of the sides (ex, 1 0 0 0 1), or only one side. (1 0)
In the first case, we need to connect all the points consecutively, except the longest one.
In the second case, we need to connect all points.
- The total cost of connecting this island is then added to the cost
*/

export function minLengthToConnectPoints(points, values) {
    // points is the x-coordinate from origin, sorted
    let n = points.length;
    let cost = 0;   // ans
    let l = 0;
    let r = 0;
    while(r < n) {
        if(values[r] === 1) { // if window end is at 1, then window start will be after it
            l = r+1;
        } else {
            while(r < n-1 && values[r + 1] === 0) { // find max consecutive zeros, and move window end accordingly
                r++;
            }
            // now we have an island of zeros from [l, r].
            // calculate lengths of wires for each pair in this island
            const lengths = [];
            for(let i = l; i < r; i++) {
              lengths.push(points[i+1] - points[i]);
            }
            // now check if there are 1's on both sides 
            if(l > 0 && r < n-1) {  // we cal also use values[l-1] and values[r+1], but since [l...r] 
            // is full of zeros, we can simply assume that if l > 0, then ther must be a 1 at l-1, 
            // and if r < n-1, there must be a 1 at r+1
              lengths.push(points[l] - points[l-1]);
              lengths.push(points[r+1] - points[r]);
              const totalLength = lengths.reduce(((a, c) => a + c), 0);
              const maxLength = Math.max(...lengths);
              // cost to connect island in this case is totalLength - maxLength
              cost += (totalLength - maxLength);
            } else {  // 1 is only on 1 side, either left or right
              if(l > 0) { // left side
                lengths.push(points[l] - points[l-1]);
              } else if(r < n - 1) {    // right side
                lengths.push(points[r+1] - points[r]);
              }
              // cost to connect island in this case is totalLength
              const totalLength = lengths.reduce(((a, c) => a + c), 0);
              cost += (totalLength);
            }
        }
        r++;
    }
    return cost;
}


