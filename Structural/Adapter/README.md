# Adapter Pattern

## Description

Adapter is a structural design pattern that allows objects with incompatible interfaces to work together (refactoring.guru). It acts as a "translator" between two classes: it wraps one object and transforms its interface into the one expected by another object. Thus, two incompatible components can collaborate without changing their code. This is often used when integrating third-party libraries or legacy code: instead of rewriting the library, an adapter is written.

## Key Benefits

- **Compatibility**: Enables collaboration between incompatible interfaces
- **Reusability**: Existing code can be reused without modification
- **Flexibility**: Easy to switch between different implementations
- **Maintainability**: Reduces coupling between components
- **Legacy integration**: Allows integration of old systems with new ones

## Use Cases

- Integrating third-party libraries with different interfaces
- Working with legacy code that can't be modified
- Converting data formats between systems
- Making incompatible APIs work together
- Database adapters for different database systems

## Structure

The pattern consists of:
- **Target**: The interface that the client expects
- **Adaptee**: The existing class with incompatible interface
- **Adapter**: The class that implements the target interface and wraps the adaptee
- **Client**: The class that uses the target interface

## Types of Adapters

- **Class Adapter**: Uses inheritance to adapt the interface
- **Object Adapter**: Uses composition to adapt the interface

## Example

The example demonstrates how to create an adapter that allows a new API interface (`NewAPI`) to work with an old API (`OldAPI`) by transforming method calls from `getData()` to `request()`. 