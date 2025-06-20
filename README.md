# Design Patterns

A comprehensive collection of design patterns implemented in JavaScript, organized by category and featuring practical examples with detailed explanations.

## Pattern Categories

### 🏗️ Creational Patterns
Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

- **[Abstract Factory](Creational/AbstractFactory/)** - Creates families of related objects without specifying their concrete classes
- **[Builder](Creational/Builder/)** - Constructs complex objects step by step
- **[Factory Method](Creational/FactoryMethod/)** - Creates objects without specifying the exact class to create
- **[Prototype](Creational/Prototype/)** - Creates new objects by cloning an existing object
- **[Singleton](Creational/Singleton/)** - Ensures a class has only one instance and provides global access to it

### 🏛️ Structural Patterns
Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

- **[Adapter](Structural/Adapter/)** - Allows incompatible interfaces to work together
- **[Bridge](Structural/Bridge/)** - Splits a large class or set of closely related classes into abstraction and implementation
- **[Composite](Structural/Composite/)** - Composes objects into tree structures and lets clients treat individual objects and compositions uniformly
- **[Decorator](Structural/Decorator/)** - Attaches new behaviors to objects by placing them inside wrapper objects
- **[Facade](Structural/Facade/)** - Provides a simplified interface to a complex subsystem
- **[Flyweight](Structural/Flyweight/)** - Reduces the cost of creating and manipulating a large number of similar objects
- **[Proxy](Structural/Proxy/)** - Provides a substitute or placeholder for another object

### 🎭 Behavioral Patterns
Behavioral patterns are concerned with communication between objects, how objects interact and distribute responsibility.

- **[Chain of Responsibility](Behavioral/ChainOfResponsibility/)** - Passes requests along a chain of handlers
- **[Command](Behavioral/Command/)** - Turns a request into a stand-alone object containing all information about the request
- **[Iterator](Behavioral/Iterator/)** - Accesses elements of a collection without exposing its underlying representation
- **[Mediator](Behavioral/Mediator/)** - Reduces coupling between components by making them communicate indirectly
- **[Memento](Behavioral/Memento/)** - Saves and restores the previous state of an object without revealing the details of its implementation
- **[Observer](Behavioral/Observer/)** - Lets you define a subscription mechanism to notify multiple objects about any events
- **[State](Behavioral/State/)** - Lets an object alter its behavior when its internal state changes
- **[Strategy](Behavioral/Strategy/)** - Lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable
- **[Template Method](Behavioral/TemplateMethod/)** - Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps
- **[Visitor](Behavioral/Visitor/)** - Separates algorithms from the objects on which they operate