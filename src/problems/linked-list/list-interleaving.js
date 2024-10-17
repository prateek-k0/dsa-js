var reorderList = function(head) {
    // step 1: get Mid and reverse list from Mid
  // step 2: interleave from 1st half and reversed 2nd half
    let mid = getMid(head);
    let reversedPart = reverse(mid);
    let firstPart = head;
    // interleave the first half and the reversed second half
    while(reversedPart.next !== null) {// check for second part only, since its smaller for even length
        let next = firstPart.next;  // save the 1st parts next pointer in a temporary var reference
        firstPart.next = reversedPart;       // add second node to the first node's next
        firstPart = next;   // re reference the node stored in the temp pointer

        next = reversedPart.next;   // save the 2nd parts next pointer in a temporary var reference
        reversedPart.next = firstPart;  // add first node to the second node's next
        reversedPart = next;    // re reference the node stored in the temp pointer
    }
};

function getMid(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverse(head) {
    let prev = null;
    let curr = head;
    while(curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}