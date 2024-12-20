// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii

export function populateNext(root) {
    if(root === null) return null;
    const q = [root];
    while(q.length > 0)  {
        const levelLength = q.length;
        let prev = null;
        for(let i = 0; i < levelLength; i++) {
            const node = q.shift();
            if(prev !== null) prev.next = node;
            prev = node;
            if(node.left !== null) q.push(node.left);
            if(node.right !== null) q.push(node.right);
        }
        prev.next = null;
    }
    return root;
};