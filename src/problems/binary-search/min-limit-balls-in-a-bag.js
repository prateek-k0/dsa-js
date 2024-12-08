// https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/

/*
    Any Problem that has "minimize" or "maximize" condition to reach the answer,
    it can be solved with binary search over answer-space.

    In this problem, instead of finding the max number of balls in a bag after all operations,
    we can reframe the question as: Given an additional integer maxBallsInBag, can we determine
    if it’s possible to distribute the balls so that no bag contains more than maxBallsInBag 
    balls, performing at most maxOperations

    l = min size of the bag, 1 (since bagSize is always positive, non-zero)
    r = max size of the bag, max(input bags)

    At every iteration of binary search, we add operations for bags greater than allowed bag size
    at that iteration.
    Ops = (arr[i] - 1) / bucket-size
    we do arr[i] - 1, instead of arr[i], since for odd numbers, it may result in bagsizes of
    bucket-size & bucket-size + 1, to not let that happen, we subtract 1 from each element and then
    try dividing the bag
*/
function countOps(arr, bucketSize) {
    let totalOps = 0;
    for(const num of arr) {
        // check the editorial for why we do num - 1: 
        totalOps += Math.floor((num - 1) / bucketSize);
    }
    return totalOps;
}

export function minimumLimitOfBallsInBag(nums, maxOperations) {
    let l = 1;
    let r = Math.max(...nums);
    let m = 1;
    let res = r;
    while(l <= r) {
        m = Math.max((l + r) / 2);
        if(countOps(nums, m) <= maxOperations) {
            res = m;
            // try decreasing bucket size
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res;
}