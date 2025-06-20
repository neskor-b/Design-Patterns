# Composite Pattern

## Description

Composite is a structural design pattern that allows you to group several objects into a tree-like structure and work with it as if it were a single object (dou.ua). The Composite pattern introduces a common interface for individual objects and containers (components and compositions). This enables recursive structures: an object can contain other objects of the same interface. Client code can interact equally with both an elementary object and an entire composite tree of objects.

## Key Benefits

- **Uniform treatment**: Treat individual objects and compositions uniformly
- **Recursive structure**: Natural tree-like object structures
- **Simplified client code**: Clients don't need to know about object types
- **Easy extension**: Adding new component types is straightforward
- **Flexible structure**: Dynamic composition of objects

## Use Cases

- File system structures (files and folders)
- GUI component hierarchies
- Organization structures (departments and employees)
- Mathematical expressions
- Menu systems with submenus

## Structure

The pattern consists of:
- **Component**: Common interface for all objects in the composition
- **Leaf**: Individual objects that have no children
- **Composite**: Container objects that can have children
- **Client**: Code that works with the component interface

## Operations

Common operations in Composite pattern:
- **Add/Remove**: Managing child components
- **Get children**: Accessing child components
- **Traverse**: Walking through the tree structure
- **Execute**: Performing operations on the entire structure

## Example

The example implements a file system where both files and folders have common operations (like display). Files are leaves (no children), while folders are containers that can hold other files and folders, creating a tree structure. 