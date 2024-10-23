// https://leetcode.com/problems/valid-parenthesis-string/description/

/*
    Intution: 
    This problem is a modification of the original valid parentheses without wild card. 
    The original valid parenthesis could be solved by either using a counter or a stack.
    1. By using a counter for the original problem, we could add 1 to it if we encounter an opening b   bracket, or subtact 1 from it if we encounter a closing bracket
    2. if at any point the counter becomes negative, it means there are multiple closing brackets encountered till now, which makes it invalid
    3. finally, check if counter is 0, if yes, then its valid, if not, then invalid

    1. Now, for this problem, we use a similar approarch, however, we maintain 2 counters, openMin and openMax, such that, they are the range of number of open brackets.
    2. When we encounter an open bracket, we increment both openMin and openMax, when we encounter a close bracket, we decrement both openMin and openMax, and when we ecnocunter *, we decrement openMin and increment openMax, meaning, min number of open brackets is reduced (since * can be a bracket / empty char) and max number of open brackets is increased (if * is substituted for an open bracket).
    3. at any point if openMax becomes negative, return false
    4. at any point, if openMin becomes negative, set openMin to 0. 
    5. If openMin is zero at the end it means the string can be balanced with some combination else it cannot be.
*/

export function validParenthesisString(str) {
    let openMin = 0;
    let openMax = 0;
    for(const char of str) {
        if(char === '(') {
            openMin++;
            openMax++;
        } else if(char === ')') {
            openMax--;
            openMin--;
        } else {    // for *
            openMax++;
            openMin--;
        }

        if(openMax < 0) return false;   // error condition 
        if(openMin < 0) openMin = 0;
    }
    return openMin === 0;
}