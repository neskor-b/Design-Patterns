# Visitor Pattern

## Description

Visitor is a behavioral design pattern that allows you to add new operations to a program without changing the classes of objects on which these operations can be performed (refactoring.guru). The pattern involves introducing a visitor object with a visit method for each type of element it can process. Structure objects (containing elements of different classes) accept the visitor by calling the method corresponding to their class. Thus, new actions are added by creating new Visitor classes, while the element classes themselves remain unchanged. This is useful when there are many heterogeneous objects and you need to periodically add new functionality for all of them.

## Key Benefits

- **Open/Closed principle**: Open for extension, closed for modification
- **Single responsibility**: Each visitor handles one specific operation
- **Easy to add operations**: New operations can be added without changing existing classes
- **Separation of concerns**: Operations are separated from the data structure
- **Type safety**: Compile-time checking of visitor implementations

## Use Cases

- Document processing with different element types
- Compiler implementations (AST traversal)
- Graphics rendering systems
- Data export/import operations
- Validation systems
- Code analysis tools

## Structure

The pattern consists of:
- **Visitor**: Interface that declares visit methods for each concrete element type
- **Concrete Visitor**: Implements the visitor interface with specific operations
- **Element**: Interface that declares an accept method
- **Concrete Element**: Implements the accept method and calls the appropriate visitor method
- **Object Structure**: Contains elements and provides an interface for visitors

## Visitor Types

- **Single dispatch**: Visitor method is chosen based on visitor type
- **Double dispatch**: Visitor method is chosen based on both visitor and element types
- **Hierarchical visitors**: Visitors that can handle element hierarchies

## Implementation Considerations

- **Performance**: Visitor pattern can be slower than direct method calls
- **Type checking**: Requires instanceof checks or type information
- **Breaking encapsulation**: Visitors often need access to element internals
- **Maintenance**: Adding new element types requires updating all visitors

## Example

The example demonstrates a structure of objects - different shapes (Dot, Circle, Rectangle), and the ability to perform various operations on them (drawing, area calculation, exporting, etc.). The Visitor pattern allows adding operations without changing the shape classes, showing how new functionality can be added through new visitor classes. 