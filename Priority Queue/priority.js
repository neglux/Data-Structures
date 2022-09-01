class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const swap = (index1, index2) => {
      let temp = this.values[index1];
      this.values[index1] = this.values[index2];
      this.values[index2] = temp;
    };
    const bubbleUp = () => {
      let index = this.values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      let current = this.values[index];
      while (parent?.priority > current.priority) {
        swap(parentIndex, index);
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
        parent = this.values[parentIndex];
        current = this.values[index];
      }
    };
    const node = new Node(val, priority);
    this.values.push(node);
    bubbleUp();
  }
  dequeue() {
    const swap = (index1, index2) => {
      let temp = this.values[index1];
      this.values[index1] = this.values[index2];
      this.values[index2] = temp;
      return true;
    };
    const getMin = (obj1, obj2) => {
      if (
        Math.min(obj1.node.priority, obj2.node.priority) === obj1.node.priority
      )
        return obj1;
      return obj2;
    };
    const sinkDown = () => {
      let parentIndex = 0;
      while (true) {
        let swapIx = null;
        const cur = {
          node: this.values[parentIndex],
          leftChild:
            {
              index: 2 * parentIndex + 1,
              node: this.values[2 * parentIndex + 1],
            } || null,
          rightChild:
            {
              index: 2 * parentIndex + 2,
              node: this.values[2 * parentIndex + 2],
            } || null,
        };

        if (cur.rightChild.node)
          swapIx = getMin(cur.leftChild, cur.rightChild).index;
        else {
          if (
            cur.leftChild.node &&
            cur.leftChild.node.priority < cur.node.priority
          )
            swapIx = cur.leftChild.index;
        }

        if (swapIx === null) return;
        swap(swapIx, parentIndex);
        parentIndex = swapIx;
      }
    };
    if (!this.values.length) return undefined;

    swap(0, this.values.length - 1);
    const removedElement = this.values.pop();
    sinkDown();
    return removedElement;
  }
}
