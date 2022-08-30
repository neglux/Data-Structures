class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);

    if (!this.first) this.first = node;
    else this.last.next = node;

    this.last = node;
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return temp.val;
    }
    this.first = this.first.next;
    this.size--;

    return temp.val;
  }
}
