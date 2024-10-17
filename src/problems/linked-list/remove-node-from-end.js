var removeNthFromEnd = function(head, n) {
    // calculate size of the list
    let len = 0;
    let curr = head;
    while(curr !== null) {
        len++;
        curr = curr.next;
    }
    if(len === 1) return null;
    const targetNodeIndex = len - n;    // to remove this indexed node, starting from 0 index
    let beginning = new ListNode(undefined, head);
    let index = 0;
    curr = beginning.next;
    prev = beginning;
    while(curr !== null) {
        if(index === targetNodeIndex) {
            prev.next = curr.next;
            break;
        }
        index++;
        curr = curr.next;
        prev = prev.next;
    }
    return beginning.next;
};