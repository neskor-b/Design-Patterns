class RealData {
  constructor() {
    console.log('RealData: long initialization...');
    this.data = [1,2,3];  // conditionally - loaded data
  }
  getData() {
    return this.data;
  }
}

class DataProxy {
  constructor() {
    this.realData = null;
  }
  getData() {
    if (!this.realData) {
      this.realData = new RealData();  // lazy creation
    }
    console.log('Proxy: returning data');
    return this.realData.getData();
  }
}

// Usage:
const proxy = new DataProxy();
console.log(proxy.getData());  // initializes RealData on first call
console.log(proxy.getData());  // second time uses already created object
// RealData: long initialization...
// Proxy: returning data
// [ 1, 2, 3 ]
// Proxy: returning data
// [ 1, 2, 3 ] 