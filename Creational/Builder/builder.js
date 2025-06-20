class House {
  constructor({ floors, hasPool, hasGarden }) {
    this.floors = floors;
    this.hasPool = hasPool;
    this.hasGarden = hasGarden;
  }
  info() {
    console.log(`House: ${this.floors} floors, pool: ${this.hasPool}, garden: ${this.hasGarden}`);
  }
}

class HouseBuilder {
  constructor() {
    // default values
    this.floors = 1;
    this.hasPool = false;
    this.hasGarden = false;
  }
  setFloors(count) { this.floors = count; return this; }
  addPool() { this.hasPool = true; return this; }
  addGarden() { this.hasGarden = true; return this; }
  build() {
    return new House({
      floors: this.floors,
      hasPool: this.hasPool,
      hasGarden: this.hasGarden
    });
  }
}

// Using the builder:
const myHouse = new HouseBuilder()
  .setFloors(2)
  .addGarden()
  .build();
myHouse.info();  // House: 2 floors, pool: false, garden: true 