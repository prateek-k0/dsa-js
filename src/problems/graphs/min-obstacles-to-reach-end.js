// https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/description/

/*
    Use 0-1 BFS,
    use deque made with linked list, else it will lead to TLE, since m*n <= 10^5;
*/
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue1 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    unshift(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.head) return null;
        const dequeued = this.head;
        this.head = this.head.next;
        dequeued.next = null;
        this.size--;
        return dequeued.val;
    }

    isEmpty() {
        return this.size === 0;
    }
}

// 0 is free space, 1 is a removable obstacle
export function minObstaclesToReachEnd(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const isInBounds = (r, c) => (r > -1 && r < m) && (c > -1 && c < n);
    const directions = [
        (r, c) => [r, c + 1],
        (r, c) => [r, c - 1],
        (r, c) => [r + 1, c],
        (r, c) => [r - 1, c]
    ];

    // dq
    let dq = new Queue1();
    dq.enqueue([0, 0, 0]);  // r, c, cost
    grid[0][0] = -1;    // mark 1st cell as visited
    while (dq.isEmpty() === false) {
        const [r, c, cost] = dq.dequeue();
        if ((r === m - 1) && (c === n - 1)) {
            return cost;    // reached end
        }
        // else, visit and enqueue all newighbours
        for (const dir of directions) {
            const [nr, nc] = dir(r, c);
            if (isInBounds(nr, nc) === true && grid[nr][nc] !== -1) {
                if (grid[nr][nc] === 1) {
                    dq.enqueue([nr, nc, cost + 1]);    // push in back, we need to look into free space first
                } else {
                    dq.unshift([nr, nc, cost]); // push in front, higher priority;
                }
                grid[nr][nc] = -1;  // mark cell visited before bfs removes it from queue
            }
        }
    }
    return 0;
}