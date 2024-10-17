/*
Merge 2 sorted lists
https://leetcode.com/problems/merge-two-sorted-lists/
*/

function mergeTwoLists(list1, list2) {
    if(list1 === null && list2 === null) return null;
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    let head1 = list1;
    let head2 = list2;
    let head = new ListNode();
    let start = head;

    while(head1 !== null && head2 !== null) {
        if(head1.val <= head2.val) {
            head.next = head1;
            head1 = head1.next;
        } else {
            head.next = head2;
            head2 = head2.next;
        }
        head = head.next;
    }
    // only one of the following 2 while loops will run
    while(head1 !== null) {
        head.next = head1;
        head1 = head1.next;
        head = head.next;
    }
    while(head2 !== null) {
        head.next = head2;
        head2 = head2.next;
        head = head.next;
    }
    return start.next;
};