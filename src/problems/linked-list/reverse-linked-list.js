/*
    reverse a linked list
    https://leetcode.com/problems/reverse-linked-list/description/
*/

function reverseList(head) {
    if(head === null) return head;
    let prev = null;
    let curr = head;
    let next = null;
    while(curr !== null) {
        next = curr.next;   // store next element first
        curr.next = prev;   // set curr next as the prev one
        prev = curr;    // set previous to curr for next iteration
        curr = next;    // set curr to next for next iteration
    }
    return prev;
};