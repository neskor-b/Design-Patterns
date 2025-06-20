class Transport {
    deliver() { }
  }
  class Truck extends Transport {
    deliver() { console.log('Deliver by truck'); }
  }
  class Ship extends Transport {
    deliver() { console.log('Deliver by ship'); }
  }
  
  class Logistics {
    createTransport() { throw new Error('Not implemented'); }
  }
  class RoadLogistics extends Logistics {
    createTransport() { return new Truck(); }
  }
  class SeaLogistics extends Logistics {
    createTransport() { return new Ship(); }
  }
  
  const factory1 = new RoadLogistics();
  const transport1 = factory1.createTransport();
  transport1.deliver(); 
  
  const factory2 = new SeaLogistics();
  const transport2 = factory2.createTransport();
  transport2.deliver(); 
  