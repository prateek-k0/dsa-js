/*
    Koko eating bananas

    https://leetcode.com/problems/koko-eating-bananas/description/

    we can simply implement binary search over the space range of all possible speed

    the minimum possible speed = 1
    the maximum possible speed = max pile size, since we can consume at most 1 pile in an hour
*/

function checkIfPossible(piles, h, k) {
    // check if each pile can be completed before h, with eating k bananas per hour
    let sum = 0;
    for(let i = 0; i < piles.length; i++) {
        sum += Math.ceil(piles[i] / k);
        if(sum >= h) return false;
    }
    return true;
}

export function kokoBananas(piles, h) {
    let l = 1 // min eating speed;
    let r = Math.max(...piles); // mas eating speed;
    let m = l;
    let res = l;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(checkIfPossible(piles, h, m) === true) { // if its satisfied, we can decrease the eating speed, sice we have to minimize it
            res = m;
            r = m-1;            
        } else {
            l = m+1;
        }
    }
    return res;
}
