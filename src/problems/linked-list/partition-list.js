// https://leetcode.com/problems/partition-list/description

export function partitonList(head, x) {
    let leftList = new ListNode();
    let rightList = new ListNode();
    let leftPtr = leftList;
    let rightPtr = rightList;
    let curr = head;
    while (curr !== null) {
        if (curr.val < x) {
            leftPtr.next = curr;
            leftPtr = leftPtr.next;
        } else {
            rightPtr.next = curr;
            rightPtr = rightPtr.next;
        }
        curr = curr.next;
    }
    leftPtr.next = rightList.next;
    rightPtr.next = null;
    return leftList.next;
}