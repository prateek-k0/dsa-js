/*
    Detect if linkedlist has a cycle - floyd's cycle detection
*/

function detectCycle(head) {
    if(head === null) return false;
    let slow = head;
    let fast = head.next;
    while(slow !== null && fast !== null) {
        if(slow === fast) return true;
        slow = slow?.next ?? null;
        fast = fast?.next?.next ?? null;
    }
    return false;
}