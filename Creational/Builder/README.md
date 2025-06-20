# Builder Pattern

## Description

Builder is a creational design pattern that allows you to create complex objects step by step (refactoring.guru). Instead of a single constructor with many parameters (which can be cumbersome), the Builder pattern suggests moving the object construction process to a separate "builder" class. The builder allows you to gradually add parts of an object, maintaining intermediate state, and only then obtain the finished object. This simplifies the creation of objects with many options and different configurations.

## Key Benefits

- **Step-by-step construction**: Build complex objects gradually
- **Fluent interface**: Method chaining for readable code
- **Flexibility**: Easy to create different configurations of the same object
- **Immutability**: The final object is immutable once built
- **Validation**: Can add validation logic during the building process

## Use Cases

- Creating complex objects with many optional parameters
- Building SQL queries
- Creating configuration objects
- Constructing UI components with many properties
- Building complex data structures

## Structure

The pattern consists of:
- **Product**: The complex object being built (e.g., House)
- **Builder**: Interface for building the product
- **Concrete Builder**: Implements the building steps
- **Director**: Optional class that orchestrates the building process

## Example

The example shows how to build a House object with optional features like pools and gardens, demonstrating the fluent interface and step-by-step construction approach. 