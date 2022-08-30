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
  shift() {
    if (!this.head) return undefined;

    const tempHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return tempHead;
    }

    this.head = this.head.next;
    this.head.prev = null;
    tempHead.next = null;
    this.length--;

    return tempHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let node = undefined;
    if (index < Math.floor(this.length / 2)) {
      node = this.head;
      for (let i = 0; i !== index; i++) node = node.next;
    } else {
      node = this.tail;
      for (let i = this.length - 1; i !== index; i--) node = node.prev;
    }
    return node;
  }
}
