// Interfaces (simulated through classes):
class Chair { sit() {} }
class Sofa  { lie() {} }
class CoffeeTable { putCoffee() {} }

// Concrete products of two variants:
class ModernChair extends Chair { sit() { console.log('Sit on modern chair'); } }
class ModernSofa extends Sofa   { lie() { console.log('Lie on modern sofa'); } }
class ModernCoffeeTable extends CoffeeTable { putCoffee() { console.log('Modern coffee table used'); } }

class VictorianChair extends Chair { sit() { console.log('Sit on victorian chair'); } }
class VictorianSofa extends Sofa   { lie() { console.log('Lie on victorian sofa'); } }
class VictorianCoffeeTable extends CoffeeTable { putCoffee() { console.log('Victorian coffee table used'); } }

// Abstract factory (interface):
class FurnitureFactory {
  createChair() { throw new Error('Not implemented'); }
  createSofa() { throw new Error('Not implemented'); }
  createCoffeeTable() { throw new Error('Not implemented'); }
}
// Concrete factories for each family:
class ModernFurnitureFactory extends FurnitureFactory {
  createChair() { return new ModernChair(); }
  createSofa() { return new ModernSofa(); }
  createCoffeeTable() { return new ModernCoffeeTable(); }
}
class VictorianFurnitureFactory extends FurnitureFactory {
  createChair() { return new VictorianChair(); }
  createSofa() { return new VictorianSofa(); }
  createCoffeeTable() { return new VictorianCoffeeTable(); }
}

// Usage:
function furnishRoom(factory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  console.log('Furnishing room:');
  chair.sit();
  sofa.lie();
}
furnishRoom(new ModernFurnitureFactory());     // uses modern furniture
furnishRoom(new VictorianFurnitureFactory());  // uses victorian furniture
