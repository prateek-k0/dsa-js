// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    let num1 = l1;
    let num2 = l2;
    let sumHead = new ListNode();
    let curr = sumHead;
    let carry = 0;
    while(num1 !== null || num2 !== null || carry > 0) {
        curr.next = new ListNode();
        curr = curr.next;

        let sum = (num1?.val ?? 0) + (num2?.val ?? 0) + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        curr.val = digit;

        num1 = num1?.next ?? null;
        num2 = num2?.next ?? null;
    }
    return sumHead.next;
};