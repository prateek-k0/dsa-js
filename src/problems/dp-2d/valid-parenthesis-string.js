// https://leetcode.com/problems/valid-parenthesis-string/

/*
    We first have a brute force solution, which we'll memoise later

    the intution is to keep a counter for each char encountered, increment for open, decrement
    for close. For *, we could substitue it with '(' (increment), ')' (decrement), or '' (empty
    space, keep the same count)
*/

export function validParenthesisString(str) {
    function checkValid(s, index = 0, count = 0) {
        // condition 1: if reached the end, check if count is 0
        if (index === s.length) {
            return count === 0;
        }
        // condition 2: if at this point count has become negative, return false
        if (count < 0) return false;
        // else, check char by char
        if (s[index] === '(') return checkValid(s, index + 1, count + 1);
        else if (s[index] === ')') return checkValid(s, index + 1, count - 1);
        else {  // s[index] === '*'
            return (
                checkValid(s, index + 1, count + 1) // substitute with (
                || checkValid(s, index + 1, count - 1) // substitute with )
                || checkValid(s, index + 1, count) // substitute with empty space, ignore
            )
        }
    }
    return checkValid(str);
}

/*
    memoized solution
*/
export function validParenthesisStringMemoized(str) {
    const dp = new Array(str.length).fill(0).map((r) => new Array(str.length).fill(null));
    function checkValid(s, index = 0, count = 0) {
        // condition 1, reached end of string, check if count is 0
        if (index === s.length) {
            return count === 0;
        }
        // if a solution is already memoized, then use it
        if (dp[index][count] != null) return dp[index][count];
        // if at this point count has become negative, return false
        if (count < 0) {
            dp[index][count] = false;
            return false;
        }
        // else, check by char
        if (s[index] === '(') {
            dp[index][count] = checkValid(s, index + 1, count + 1); // increment count
        } else if (s[index] === ')') {
            dp[index][count] = count != 0 && checkValid(s, index + 1, count - 1);   // decrement count
        } else {
            dp[index][count] = (
                checkValid(s, index + 1, count + 1) // substitute (
                || checkValid(s, index + 1, count - 1) // substitute )
                || checkValid(s, index + 1, count)  // // substitute '' (empty char), ignore
            );
        }
        return dp[index][count];
    }
    return checkValid(str, 0, 0);
}