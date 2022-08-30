class Node {
  constructor(val) {
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
  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    const tempTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return tempTail;
    }

    this.tail = this.tail.prev;
    tempTail.prev = null;
    this.tail.next = null;
    this.length--;

    return tempTail;
  }
}
