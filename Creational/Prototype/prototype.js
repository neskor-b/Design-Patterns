// Object prototype:
const carPrototype = {
  init(make, model) {
    this.make = make;
    this.model = model;
  },
  getInfo() {
    return `${this.make} ${this.model}`;
  }
};

// Creating a new object by cloning the prototype:
const car1 = Object.create(carPrototype);
car1.init('Tesla', 'Model S');
console.log(car1.getInfo());  // Tesla Model S

const car2 = Object.create(carPrototype);
car2.init('Audi', 'Q8');
console.log(car2.getInfo());  // Audi Q8 