// split array minimum difference

/*
  given an array with non negative elements, split the array in 2 subarrays such that the 
  difference between the sum of the elements in both subarrays is minimum
  
  for example, the array is arr[0...n-1], then if we split the array at m,
  such that there are 2 subarrays arr[0...m] and arr[m+1...n-1],
  then we need to find m such that Math.abs(sum(arr[0...m]) - sum(arr[m+1...n-1])) is minimum
  
  return the split array
  
  we can use binary search on prefix sum for this
  lower bound: 0 (first index)
  upper bound: n-1 (last index)
  at each bin search iteration, check if the sum of the left segment is less than right segment,
  if it is, move right, else move left
*/


export function splitArrayMinDiff(arr) {
  const prefix = new Array(arr.length).fill(0); // inclusive prefix sum
  for(let i = 0; i < arr.length; i++) {
    prefix[i] = (prefix[i-1] ?? 0) + arr[i];
  }
  let l = 0;
  let r = arr.length - 1;
  let m = 0;
  let res = 0;  // res stores the min difference
  while(l <= r) {
    m = Math.floor((l + r) / 2);
    let leftSegmentSum = prefix[m]; // sum of arr[0...m]
    let rightSegmentSum = prefix[arr.length - 1] - prefix[m]; // sum of arr[m+1...n-1]
    if(leftSegmentSum <= rightSegmentSum) { // even if its equal, we consider res as m, since element m is considered in left segment's sum
      res = m;
      l = m+1;
    } else {
      r = m-1;
    }
  }
  return [arr.slice(0, res+1), arr.slice(res+1)];
}


