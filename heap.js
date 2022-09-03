class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    const bubbleUp = () => {
      const swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
      };
      let index = this.values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);
      while (this.values[parentIndex] < this.values[index]) {
        swap(this.values, parentIndex, index);
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    };
    this.values.push(val);
    bubbleUp();
  }
  extractMax() {
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
          if (rightChild > cur) {
            const maxChild = Math.max(leftChild, rightChild);
            if (maxChild === leftChild) swapIx = leftIx;
            else swapIx = rightIx;
          }
        } else {
          if (leftChild && leftChild > cur) swapIx = leftIx;
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
