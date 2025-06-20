# Facade Pattern

## Description

Facade is a structural design pattern that provides a simple interface to a complex system of classes, library, or framework (dou.ua). The facade "hides" complexity by offering the client several high-level methods instead of many low-level ones. This reduces the dependency between the application code and subsystem implementation details - changes inside the subsystem won't affect external code if the facade interface remains unchanged.

## Key Benefits

- **Simplified interface**: Provides a simple interface to complex subsystems
- **Loose coupling**: Reduces dependencies between client and subsystems
- **Easier maintenance**: Changes to subsystems don't affect client code
- **Better organization**: Groups related functionality together
- **Improved readability**: Client code becomes more readable and understandable

## Use Cases

- Simplifying complex library APIs
- Providing a unified interface to multiple subsystems
- Wrapping legacy systems with modern interfaces
- Creating high-level interfaces for complex operations
- Reducing the learning curve for complex systems

## Structure

The pattern consists of:
- **Facade**: Provides a simplified interface to the subsystem
- **Subsystem classes**: Complex classes that the facade coordinates
- **Client**: Code that uses the facade instead of working directly with subsystems

## When to Use

- When you want to provide a simple interface to a complex subsystem
- When you need to decouple a subsystem from its clients
- When you want to layer your subsystems
- When you need to provide a unified interface to multiple subsystems

## Example

The example demonstrates a home theater system with multiple complex components (TV, sound system, game console). The facade provides simple methods like `watchMovie()` and `endMovie()` that coordinate all the subsystems in the correct order, hiding the complexity from the client. 