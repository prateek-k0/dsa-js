export class PriorityQueue {   // max heap
    queue = [];

    enqueue(element) {
        this.queue.push(element);
        // heapify up
        let parent = Math.floor((this.queue.length - 1) / 2);
        while(parent >= 0) {
            let leftChild = 2 * parent + 1;
            let rightChild = 2 * parent + 2;
            if(this.queue[leftChild] > this.queue[parent]) {
                [this.queue[leftChild], this.queue[parent]] = [this.queue[parent], this.queue[leftChild]];
            }
            if(this.queue[rightChild] > this.queue[parent]) {
                [this.queue[rightChild], this.queue[parent]] = [this.queue[parent], this.queue[rightChild]];
            }
            // go to its parent
            parent = Math.floor((parent - 1) / 2);
        }
    }

    peek() {
        return this.queue[0];
    }

    dequeue() {
        [this.queue[0], this.queue[this.queue.length - 1]] = [this.queue[this.queue.length - 1], this.queue[0]];
        const maxElement = this.queue.pop();
        console.log('popped element', maxElement);
        // heapify down
        let parent = 0;
        while(parent < this.queue.length) {
            const leftChild = 2 * parent + 1;
            const rightChild = 2 * parent + 2;
            let largest = parent;
            if(leftChild < this.queue.length && this.queue[leftChild] > this.queue[parent]) {
                largest = leftChild;
            }
            if(rightChild < this.queue.length && this.queue[rightChild] > this.queue[parent]) {
                largest = rightChild;
            }
            if(largest !== parent) {
                // if changed, go to its changed child
                [this.queue[parent], this.queue[largest]] = [this.queue[largest], this.queue[parent]];
                parent = largest;
            }
            else break; // if not changed, no need to check childrens' subtrees
        }
        return maxElement;
    }
}