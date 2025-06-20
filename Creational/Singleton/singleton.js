class Singleton {
    constructor(name = '') {
      if (Singleton.instance) {
        return Singleton.instance; 
      }
      this.name = name;
      Singleton.instance = this;             
    }
    getName() {
      return this.name;
    }
  }
  
  // Використання:
  const obj1 = new Singleton('First');
  const obj2 = new Singleton('Second');
  console.log(obj1.getName());    // First
  console.log(obj2.getName());    // First
  console.log(obj1 === obj2);     // true
  