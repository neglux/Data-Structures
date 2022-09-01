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
  delete(val) {
    const deleteLeaf = (parent, removedNode) => {
      if (removedNode === parent.left) parent.left = null;
      else parent.right = null;
      return removedNode;
    };

    const deleteNodeWithOneChild = (parent, removedNode) => {
      if (removedNode === parent.left)
        parent.left = removedNode.left || removedNode.right;
      else parent.right = removedNode.left || removedNode.right;
      return removedNode;
    };

    const deleteNodeWithTwoChild = (parent, removedNode) => {
      const findMin = (node) => {
        node = node.right;
        while (node) {
          if (node.left) node = node.left;
          else return node;
        }
      };

      const newNode = findMin(removedNode);
      this.delete(newNode.val);
      newNode.left = removedNode.left;
      if (removedNode.right === newNode) newNode.right = null;
      else newNode.right = removedNode.right;

      if (!parent) this.root = newNode;
      else {
        if (parent.left === removedNode) parent.left = newNode;
        else parent.right = newNode;
      }
      return removedNode;
    };
    let cur = this.root;
    let parent = null;
    while (true) {
      if (val === cur.val) {
        if (!cur.left && !cur.right) return deleteLeaf(parent, cur);
        if (!cur.left || !cur.right) return deleteNodeWithOneChild(parent, cur);
        return deleteNodeWithTwoChild(parent, cur);
      }

      parent = cur;
      if (val > cur.val) cur = cur.right;
      else cur = cur.left;
    }
  }
}
