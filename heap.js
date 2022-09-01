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
    const getMax = (obj1, obj2) => {
      if (Math.max(obj1.val, obj2.val) === obj1.val) return obj1;
      return obj2;
    };
    const sinkDown = () => {
      let parentIndex = 0;
      while (true) {
        let swapIx = null;
        const cur = {
          val: this.values[parentIndex],
          leftChild:
            {
              index: 2 * parentIndex + 1,
              val: this.values[2 * parentIndex + 1],
            } || null,
          rightChild:
            {
              index: 2 * parentIndex + 2,
              val: this.values[2 * parentIndex + 2],
            } || null,
        };

        if (cur.rightChild.val)
          swapIx = getMax(cur.leftChild, cur.rightChild).index;
        else {
          if (cur.leftChild.val && cur.leftChild.val > cur.val)
            swapIx = cur.leftChild.index;
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
