// https://leetcode.com/problems/hand-of-straights/

export function handOfStraights(hand, groupSize) {
    if(hand.length % groupSize !== 0) return false; // if hand size is not a multiple of groupSize, it cannot be chunked 
    const freq = {};
    for(let i = 0; i < hand.length; i++) {
        freq[hand[i]] = (freq[hand[i]] ?? 0) + 1;   // store frequencies of all elements
    }
    hand.sort((a, b) => a - b);
    for(let i = 0; i < hand.length; i++) {
        if(freq[hand[i]] === 0) continue;   // already used for some other group

        for(let j = 0; j < groupSize; j++) {
            if(freq[hand[i] + j] === 0 || freq[hand[i] + j] === undefined) return false;    // element not available / not available in enough quantity
            freq[hand[i] + j] -= 1; // decrease the freq, since we have used it.
        }
    }
    return true;
};