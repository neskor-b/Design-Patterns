class Matrix {
  constructor(data) {
    this.data = data;
  }
  // Built-in iteration support:
  [Symbol.iterator]() {
    let row = 0;
    let col = 0;
    const data = this.data;
    return {
      next() {
        if (row >= data.length) {
          return { done: true };
        }
        const value = data[row][col];
        col++;
        if (col >= data[row].length) {  // move to next row
          col = 0;
          row++;
        }
        return { value, done: false };
      }
    };
  }
}

const matrix = new Matrix([[1, 2], [3, 4, 5]]);
for (const num of matrix) {
  console.log(num);
}
// Output: 1, 2, 3, 4, 5 (sequentially) 