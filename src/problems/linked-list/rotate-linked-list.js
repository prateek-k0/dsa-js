// https://leetcode.com/problems/rotate-list/

function rotateBy1(head) {
    let start = head;
    let lastNode = head;
    let prevLast = null;
    while (lastNode.next !== null) {
        prevLast = lastNode;
        lastNode = lastNode.next;
    }
    if (prevLast !== null) {
        prevLast.next = null;
        lastNode.next = start;
    }
    return lastNode;
}

export function rotateLinkedList(head, k) {
    if (head === null || k === 0) return head;
    // find length
    let length = 0;
    for (let curr = head; curr !== null; length++) {
        curr = curr.next;
    }
    console.log(length);
    // shorten K
    k = k % length;
    for (let i = 0; i < k; i++) {
        head = rotateBy1(head);
    }
    return head;
};