/*
    merge k sorted lists
    https://leetcode.com/problems/merge-k-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    if(lists.length > 1) {
        const m = Math.floor(lists.length / 2);
        let leftRes = mergeKLists(lists.slice(0, m));
        let rightRes = mergeKLists(lists.slice(m));
        return mergeSortedLists(leftRes, rightRes);
    }   
    return lists[0];
};

function mergeSortedLists(list1, list2) {
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
}