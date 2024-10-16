// https://leetcode.com/problems/longest-consecutive-sequence/description/

/*
    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

export function longestConsecutiveSubsequence(arr) {
    const elementHash = {};
    for(let i = 0; i < arr.length; i++) {
        elementHash[arr[i]] = true;
    }
    let maxConsecutiveLength = 1;
    arr.forEach((element) => {
        // if the current element has a previous number, then it is already / will be included in the calculation of the longest chain
        if(elementHash[element - 1] !== undefined) {
            return;
        }
        let currLen = 0;
        let currentElement = element;
        while(elementHash[currentElement] !== undefined) {
            currentElement++;
            currLen++;
        }
        maxConsecutiveLength = Math.max(maxConsecutiveLength, currLen);
    });
    return maxConsecutiveLength
}