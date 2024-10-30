// Boyer-Moore Majority Voting Algorithm

// https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/

/*
    The Boyer-Moore voting algorithm is one of the popular optimal algorithms which is used to find the majority element among the given elements that have more than N/ 2 occurrences. This works perfectly fine for finding the majority element which takes 2 traversals over the given elements, which works in O(N) time complexity and O(1) space complexity.

    Generalization: for element with more than (n / 2) occurrences, we need 1 candidate
    For finding element occuring (n / k) times, we need k - 1 candidates

    // general algo
    https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm-for-searching-elements-having-more-than-k-occurrences/?ref=ml_lbp
*/

export function boyerMooreVoting(arr) {
    let candidate = -1; // store candidate
    let count = 0;  // count of current candidate
    for(let i = 0; i < arr.length; i++) {
        if(count === 0) {   // if count becomes 0, set candidate to current element
            candidate = arr[i];
            count = 1;
        } else {    // else, check if current element === current candidate. if yes, increment count, if not, decrement count
            if(candidate === arr[i]) {
                count++;
            } else {
                count--;
            }
        }
    }
    // check if selected candidate has count > n/2
    count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(candidate === arr[i]) count++;
    }
    if(count > Math.floor(arr.length / 2)) return candidate;
    // else
    return -1;
}