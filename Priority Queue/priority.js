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
      let curIx = this.values.length - 1;
      let parentIx = Math.floor((curIx - 1) / 2);
      while (this.values[parentIx]) {
        if (this.values[parentIx].priority > this.values[curIx].priority)
          swap(parentIx, curIx);
        curIx = parentIx;
        parentIx = Math.floor((curIx - 1) / 2);
      }
    };
    const node = new Node(val, priority);
    this.values.push(node);
    bubbleUp();
  }
  dequeue() {
    const swap = (arr, index1, index2) => {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
      return true;
    };
    const sinkDown = () => {
      let parentIndex = 0;
      while (true) {
        let swapIx = null;
        const cur = this.values[parentIndex];
        const leftIx = 2 * parentIndex + 1;
        const rightIx = 2 * parentIndex + 2;
        const leftChild = this.values[leftIx] || null;
        const rightChild = this.values[rightIx] || null;

        if (rightChild) {
          if (rightChild.priority < cur.priority) {
            const minChild = Math.min(leftChild.priority, rightChild.priority);
            if (minChild === leftChild.priority) swapIx = leftIx;
            else swapIx = rightIx;
          }
        } else {
          if (leftChild && leftChild.priority < cur.priority) swapIx = leftIx;
        }

        if (swapIx === null) return;
        swap(this.values, swapIx, parentIndex);
        parentIndex = swapIx;
      }
    };
    if (!this.values.length) return undefined;

    swap(this.values, 0, this.values.length - 1);
    const removedElement = this.values.pop();
    sinkDown();
    return removedElement;
  }
}
