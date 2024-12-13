// https://leetcode.com/problems/reverse-linked-list-ii/description

function reverseChunk(head, length) {
    if(head === null) return head;
    let prev = null;
    let curr = head;
    let end = head;
    for(let i = 0; i < length; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return [prev, end];
}

export function reverseLinkedList2 (head, left, right) {
    let curr = head;
    let index = 0;
    let start = null;
    let prev = null;
    let startPrev = null;
    let end = head;
    let endNext = null;
    let sentinel = head;
    while(curr !== null) {
        if(index + 1 === left) {
            startPrev = prev;
            start = curr;
        } else if(index + 1 === right) {
            end = curr;
            endNext = end.next;
            let [h, t] = reverseChunk(start, right - left + 1);
            if(startPrev !== null) startPrev.next = h;
            else sentinel = h;
            t.next = endNext;
            break;
        }
        prev = curr;
        curr = curr.next;
        index++;
    }
    return sentinel;
};