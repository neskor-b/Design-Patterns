# Flyweight Pattern

## Description

Flyweight is a structural design pattern that minimizes memory usage by sharing as much data as possible between other similar objects (uk.wikipedia.org). The Flyweight pattern allows you to fit more objects into available memory by storing the shared state of these objects in one place and reusing it. Each flyweight object contains only unique state (extrinsic state), while common data (intrinsic state) is shared. This is especially useful for large numbers of small, similar objects (for example, millions of "pixels" or "characters" in text).

## Key Benefits

- **Memory efficiency**: Reduces memory usage by sharing common data
- **Performance**: Faster object creation and access
- **Scalability**: Can handle large numbers of objects efficiently
- **Separation of concerns**: Distinguishes between intrinsic and extrinsic state
- **Reusability**: Objects can be reused across different contexts

## Use Cases

- Text editors with many characters
- Game development (trees, bullets, particles)
- GUI frameworks with repeated elements
- Database connection pooling
- Caching systems

## Structure

The pattern consists of:
- **Flyweight**: Interface for flyweight objects
- **Concrete Flyweight**: Implements the flyweight interface and stores intrinsic state
- **Flyweight Factory**: Manages flyweight objects and ensures they are shared properly
- **Client**: Maintains references to flyweights and computes extrinsic state

## State Types

- **Intrinsic State**: Shared state that can be reused (e.g., character code)
- **Extrinsic State**: Unique state that varies between objects (e.g., font, color, position)

## Example

The example demonstrates a text editor scenario where instead of each character containing all information (character code, font, style), the Flyweight pattern is implemented: letter objects store only the character code (intrinsic state), while external state (font, color, etc.) is passed when used. 