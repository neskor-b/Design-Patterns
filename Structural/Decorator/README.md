# Decorator Pattern

## Description

Decorator is a structural design pattern that allows you to dynamically add new functionality to objects by wrapping them in useful "wrappers" (dou.ua). Decorators provide an alternative to inheritance for extending behavior: instead of creating a subclass with additional functionality, we create a decorator class that accepts an object of the base class and delegates work to it, adding something of its own. You can sequentially wrap an object with several decorators, obtaining a cascade of additional capabilities.

## Key Benefits

- **Dynamic behavior**: Add functionality at runtime
- **Single responsibility**: Each decorator has one specific responsibility
- **Open/Closed principle**: Open for extension, closed for modification
- **Flexible composition**: Combine decorators in any order
- **No inheritance explosion**: Avoid creating many subclasses

## Use Cases

- Adding logging, caching, or validation to existing objects
- GUI component styling and behavior
- Middleware in web frameworks
- Stream processing with filters
- Adding features to third-party libraries

## Structure

The pattern consists of:
- **Component**: Interface for objects that can have responsibilities added
- **Concrete Component**: Basic implementation of the component
- **Decorator**: Abstract class that maintains a reference to a component
- **Concrete Decorator**: Adds responsibilities to the component

## Decorator Chain

Multiple decorators can be chained together:
```javascript
const sender = new MessageSender();
const timestamped = new TimestampedSender(sender);
const encrypted = new EncryptedSender(timestamped);
```

## Example

The example shows how to add timestamp logging to a message sender without modifying the original class. The decorator wraps the original object and adds timestamp functionality while delegating the actual sending to the wrapped object. 