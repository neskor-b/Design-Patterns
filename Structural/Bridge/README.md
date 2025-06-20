# Bridge Pattern

## Description

Bridge is a structural design pattern that divides one or more classes into two separate hierarchies - abstraction and implementation, allowing you to change code in one branch independently of the other (refactoring.guru). The Bridge pattern is designed to avoid multiple inheritance and explosive growth of subclasses when there are several independent dimensions of variation. Instead of inheritance, it proposes delegation: extract one part of the functionality into a separate class and reference it.

## Key Benefits

- **Separation of concerns**: Abstraction and implementation are independent
- **Extensibility**: Easy to add new abstractions or implementations
- **Avoids inheritance explosion**: Prevents combinatorial explosion of classes
- **Runtime flexibility**: Can change implementation at runtime
- **Single responsibility**: Each class has a single, well-defined purpose

## Use Cases

- When you want to avoid binding an abstraction to its implementation
- When both abstraction and implementation should be extensible by subclassing
- When changes in implementation should not affect client code
- When you want to hide implementation details from clients
- When you have multiple independent dimensions of variation

## Structure

The pattern consists of:
- **Abstraction**: Defines the interface for the abstraction
- **Refined Abstraction**: Extends the abstraction interface
- **Implementor**: Defines the interface for implementation classes
- **Concrete Implementor**: Implements the implementor interface

## Example

The classic example demonstrates the separation of shape and color hierarchies. Instead of creating subclasses for each combination ("RedCircle", "BlueSquare", etc.), we introduce a "Shape" hierarchy and separately a "Color" hierarchy, with the "bridge" being the connection between them. 