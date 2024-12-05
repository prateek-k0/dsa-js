// https://leetcode.com/problems/single-number-iii/description/

// https://www.geeksforgeeks.org/find-two-non-repeating-elements-in-an-array-of-repeating-elements/

/*
    The idea is to separate the array into 2 halves, such that each half contains 1 distinct element

    First, we take the xor of all the elements
    Now, if a bit is set in xor, then only one of the distinct elements has that bit set
    so, we again iterate the array such that we check if a bit (lets say, last set bit of the xor)
    is set in the element, if it is, we put it in the first part, else second part.

    now, we take xors indiviudally of each part and get the answer
*/

function rightmostSetBit(num) {
    return num & ~(num-1);
}

export function singleNumber3(nums) {
    let xOr = nums.reduce((a, c) => a ^ c);
    // get the leftmost set bit of xor, we can take any set bit tho
    const lmsb = rightmostSetBit(xOr);
    // iterate the array, and divide it into 2 parts
    let xOr1 = 0;   // for xOr of elements in first part
    let xOr2 = 0;   // for xOr of elements in second part
    for(const num of nums) {
        if(num & lmsb) { // if lmsb of xor is set in element, add it to first part's xor
            xOr1 ^= num;
        } else {    // else add it to second part's xor
            xOr2 ^= num;
        }
    }
    return [xOr1, xOr2];
}