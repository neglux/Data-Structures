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
}
