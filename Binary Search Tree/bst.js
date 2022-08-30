class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let node = this.root;
    while (true) {
      if (newNode.val === node.val) return undefined;

      if (newNode.val > node.val) {
        if (node.right) node = node.right;
        else {
          node.right = newNode;
          return this;
        }
      } else {
        if (node.left) node = node.left;
        else {
          node.left = newNode;
          return this;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;

    let cur = this.root;
    while (true) {
      if (cur.val === val) return true;

      if (val > cur.val) {
        if (cur.right) cur = cur.right;
        else return false;
      } else {
        if (cur.left) cur = cur.left;
        else return false;
      }
    }
  }
}
