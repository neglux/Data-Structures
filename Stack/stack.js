class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.size++;
      return this.size;
    }

    let temp = this.first;
    node.next = temp;
    this.first = node;
    this.size++;
    return this.size;
  }

  pop() {
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
