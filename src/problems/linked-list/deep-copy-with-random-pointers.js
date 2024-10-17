// https://leetcode.com/problems/copy-list-with-random-pointer/submissions/1425202466/

// we can use the fact that map can store objects as keys

var copyRandomList = function(head) {
    const hashMap = new Map();
    let curr = head;
    // 1. store in the map first
    while(curr !== null) {
        hashMap.set(curr, new _Node(curr.val, null, null)); // old object: new object
        curr = curr.next;
    }
    // 2. attach next and random pointers
    let headCopy = hashMap.get(head);
    let currCopy = headCopy;
    curr = head;
    while(curr !== null) {
        currCopy.next = hashMap.get(curr.next) ?? null;
        currCopy.random = hashMap.get(curr.random) ?? null;
        curr = curr.next;
        currCopy = currCopy.next;
    }
    return headCopy;
};