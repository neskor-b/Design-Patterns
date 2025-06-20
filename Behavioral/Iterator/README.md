# Iterator Pattern

## Description

Iterator is a behavioral design pattern that allows you to sequentially traverse elements of composite objects without revealing their internal organization (refactoring.guru). The pattern provides an abstract interface for accessing collection elements (array, tree, etc.) without needing to know the details of its implementation. The iterator encapsulates the traversal logic (for example, how to move to the next element) and allows you to have multiple independent passes through the same collection.

## Key Benefits

- **Encapsulation**: Hides the internal structure of collections
- **Multiple iterations**: Allows multiple independent traversals
- **Uniform interface**: Provides consistent way to access different collection types
- **Separation of concerns**: Separates traversal logic from collection logic
- **Lazy evaluation**: Can implement lazy loading of elements

## Use Cases

- Traversing complex data structures
- Providing uniform access to different collection types
- Implementing custom iteration logic
- Supporting multiple iteration strategies
- Database result set traversal
- File system directory traversal

## Structure

The pattern consists of:
- **Iterator**: Interface that defines methods for accessing elements
- **Concrete Iterator**: Implements the iteration algorithm
- **Collection**: Interface that declares a method for getting iterators
- **Concrete Collection**: Implements the method to return concrete iterators
- **Client**: Works with both collections and iterators

## JavaScript Implementation

In JavaScript, iterators are implemented through the Iterator protocol and the `for..of` construct. The `Symbol.iterator` method allows objects to be iterable.

## Iterator Protocol

The iterator protocol requires:
- `next()` method that returns `{value, done}`
- `done: true` when iteration is complete
- `value` containing the current element

## Example

The example demonstrates creating a custom iterator for a non-standard structure - a two-dimensional array, to iterate through all its values sequentially. The Matrix class implements the Iterator protocol, allowing it to be used with `for..of` loops. 