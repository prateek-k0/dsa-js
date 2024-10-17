class ListNode {
    val = 0;
    next = null;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var reverseKGroup = function(head, k) {
    let chunkSize = 0;
    let start = head;
    let curr = head;
    let lastChunkEnd = null;    // keeps track of end of the previous chunk
    let chunkStart = head;  // keeps track of start of current chunk
    let chunkCount = 0; // number of chunks
    while(curr !== null) {
        chunkSize += 1;
        if(chunkSize === k) {
            let [reversedHead, reversedTail] = reverseChunk(chunkStart, k, curr.next, lastChunkEnd);
            lastChunkEnd = reversedTail;    // update lastChunkEnd with the new chunk's end
            chunkStart = lastChunkEnd.next; // new chunk's start = lastChunk's end
            curr = reversedTail;    // curr to be at the current tails end
            chunkSize = 0;  // reset chunk size for further chunk
            if(chunkCount === 0) start = reversedHead;  // if its the first chunk, place a pointer to its beginning
            chunkCount ++;
        }
        curr = curr.next;
    }
    return start;
};

function reverseChunk(head, chunkSize = 1, nextLink = null, prevLink = null) {  // reverse a chunk, while preserving previous and next links
    let prev = nextLink;
    let curr = head;
    let lastNode = head;
    for(let i = 0; i < chunkSize; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    if(prevLink !== null) prevLink.next = prev;
    return [prev, lastNode];    // return first and last node of the reversed chunk
}