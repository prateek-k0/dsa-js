/*
Given a number num, and a range [l, r] where 1 <= l, r <= 32. 
The task is to set bits from l to r  for the number num
*/

export function setBitsInRange(num, l, r) { // l and r are 1-indexed
    if(l < 1 || r > 32) return -1;
    for(let i = l; i <= r; i++) {
        // create a mask such that only i'th bit of the mask is set
        const mask = 1 << (i - 1); //since l and r are 1-indexed, i is also 1-indexed
        // set ith bit in num
        num |= mask;
    }
    return num;
}

