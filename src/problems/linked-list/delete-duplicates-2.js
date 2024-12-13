// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

export function deleteDuplicates2(head) {
    if (head === null) return head;
    let curr = head;
    let prev = null;
    let sentinel = head;
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            while (curr.next !== null && curr.val === curr.next.val) {
                curr = curr.next;
            }
            if (prev !== null) prev.next = curr.next;
            else sentinel = curr.next;
            curr = curr.next;
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }
    return sentinel;
}