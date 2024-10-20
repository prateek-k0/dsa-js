// LRU Cache implementation with ES6 Map and Doubly Linked Lists

// doubly linked lists
class Node {
  constructor(key, val) {
      this.key = key;
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (key, val) => {
    const newNode = new Node(key, val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = this.tail.next;
    }
    this.length ++;
    return newNode;
  }

  remove = (node) => {
    if(!node.next && !node.prev) {  // if there's only 1 node
      this.tail = null;
      this.head = null;
    } else if(!node.next) { // if the node is tail node
      this.tail = node.prev;
      this.tail.next = null;
    } else if(!node.prev) { // if the node is head node
      this.head = node.next;
      this.head.prev = null;
    } else {  // if the node is in between
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length --;
  }
}

class LRUCache {
  constructor(capacity) {
    this.DLL = new DoublyLinkedList();
    this.map = {};
    this.capacity = capacity;
  }

  get(key) {
    if(!this.map[key]) return -1;
    const value = this.map[key].val;
    this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);  // push towards the end, since it has high priority
    return value;
  }

  put(key, value) {
    if(this.map[key]) this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);  // high priority nodes are stored at the end
    if(this.DLL.length > this.capacity) {
      const currKey = this.head.key;
      delete this.map[currKey];
      this.DLL.remove(this.DLL.head);
    }
  }
}

// with Maps
class LRUCache {
  constructor(capacity) {
      this.map = new Map();
      this.capacity = capacity;
  }

  get(key) {
      if (!this.map.has(key)) return -1;
      const val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val);
      return val;
  }

  put(key, value) {
      this.map.delete(key);
      this.map.set(key, value);
      if (this.map.size > this.capacity) {
        const firstItem = this.map.keys().next().value; // maps are ordered by insertion
        this.map.delete(firstItem);
      }
  }
}
