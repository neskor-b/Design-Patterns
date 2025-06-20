// Sorting strategies (functions or classes with single sort method):
function bubbleSort(arr) {
  console.log('Using Bubble Sort');
  // ... (bubble sort implementation)
  return arr.slice().sort((a,b)=>a-b);  // simplified: using built-in sort
}
function quickSort(arr) {
  console.log('Using Quick Sort');
  // ... (quick sort implementation)
  return arr.slice().sort((a,b)=>a-b);  // simplified
}

// Context that uses strategy:
class Sorter {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  sort(arr) {
    if (!this.strategy) throw new Error('Strategy not set');
    return this.strategy(arr);
  }
}

// Usage:
const sorter = new Sorter();
sorter.setStrategy(bubbleSort);
console.log(sorter.sort([5, 2, 9, 1]));  
// Using Bubble Sort
// [1, 2, 5, 9]

sorter.setStrategy(quickSort);
console.log(sorter.sort([5, 2, 9, 1]));  
// Using Quick Sort
// [1, 2, 5, 9] 