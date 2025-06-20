# Memento Pattern

## Description

Memento (sometimes "Caretaker") is a behavioral design pattern that allows you to save and restore the past state of objects without revealing the details of their implementation (refactoring.guru). The pattern involves creating a special "memento" object that captures the internal state of another object (originator) at a specific moment. The originator can pass the memento to an external caretaker (for example, a history management object) without violating encapsulation, since the memento doesn't reveal how the data is stored. Later, this memento can be used to roll back the originator to the saved state.

## Key Benefits

- **Encapsulation**: Preserves object encapsulation while allowing state restoration
- **Undo functionality**: Enables undo/redo operations
- **State history**: Can maintain multiple states for complex undo chains
- **Separation of concerns**: Separates state storage from state management
- **No violation of encapsulation**: Memento doesn't expose internal structure

## Use Cases

- Undo/Redo functionality in applications
- Game save/load systems
- Database transaction rollback
- Configuration management
- State restoration in workflows
- Checkpoint systems

## Structure

The pattern consists of:
- **Originator**: The object whose state needs to be saved
- **Memento**: Stores the internal state of the originator
- **Caretaker**: Manages the memento objects and decides when to save/restore

## Memento Types

- **Simple memento**: Stores complete state
- **Incremental memento**: Stores only changes from previous state
- **Selective memento**: Stores only specific parts of the state

## Implementation Considerations

- **Memory usage**: Storing many mementos can consume significant memory
- **Performance**: State serialization/deserialization can be expensive
- **State size**: Large states may require compression or selective storage
- **Persistence**: Mementos can be saved to disk for long-term storage

## Example

The example demonstrates a text editor with multi-step undo capability. The memento is the state of the text in the editor. The Editor class and EditorMemento class are created for state saving, showing how the pattern enables state restoration without exposing internal implementation details. 