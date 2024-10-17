/*
    https://leetcode.com/problems/find-the-duplicate-number/description/

    we can use floyd's cycle detection (slow and fast pointers) for this
    https://www.geeksforgeeks.org/find-any-one-of-the-multiple-repeating-elements-in-read-only-array-set-2/

*/

var findDuplicate = function(arr) {
    let slow = arr[0];
    let fast = arr[0];
    while(true) {  // if they collide, theres a cycle (duplicate number)
        slow = arr[slow];
        fast = arr[arr[fast]];
        if(fast === slow) break;
    }
    // fast === slow now, run them at same speeds and see where they meet
    // reset slow
    slow = arr[0];
    while(slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    return slow;
};