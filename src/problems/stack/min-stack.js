/*
    https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() - initializes the stack object.
    void push(int val) - pushes the element val onto the stack.
    void pop() - removes the element on the top of the stack.
    int top() - gets the top element of the stack.
    int getMin() - retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

for this, we can store the following on each push op:
[element, min-until-now], we need to store min-until-now, so that, we can keep track of min element
even after top is popped.
To store min-until-now, we can use: min(current-element, last-min);
*/

export class MinStack {
    stack = [];
    // elements will be stored as [val, current-min];
    push(val) {
        // if stack is empty, minimum is current val;
        const currentMin = (this.stack.length > 0) ? this.stack[this.stack.length - 1][1] : val;
        // get the min-until-now
        const minUntilNow = Math.min(currentMin, val);
        this.stack.push([val, minUntilNow]);
        return null;
    }
    pop() {
        this.stack.pop();
        return null;
    }
    top() {
        return this.stack[this.stack.length - 1]?.[0];
    }
    getMin() {
        return this.stack[this.stack.length - 1]?.[1];
    }
}