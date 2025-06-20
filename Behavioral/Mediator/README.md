# Mediator Pattern

## Description

Mediator is a behavioral design pattern that reduces chaotic dependencies between many classes by moving these connections to a single mediator object (refactoring.guru). In other words, Mediator coordinates the interaction of a set of objects so that they don't directly reference each other, but communicate through a central "dispatcher" link. This promotes loose coupling: each component knows only about the mediator, instead of knowing about all others. A typical example is a dialog window with a group of widgets: when one changes, it notifies the mediator (dialog), which decides who else needs to know about it and what to change.

## Key Benefits

- **Loose coupling**: Components don't directly reference each other
- **Centralized control**: All communication goes through the mediator
- **Easier maintenance**: Changes to communication logic are centralized
- **Reduced complexity**: Eliminates many-to-many relationships
- **Reusability**: Components can be reused in different contexts

## Use Cases

- Chat rooms and messaging systems
- GUI frameworks with multiple widgets
- Air traffic control systems
- Event handling systems
- Workflow management
- Multi-player game coordination

## Structure

The pattern consists of:
- **Mediator**: Defines the interface for communication between colleagues
- **Concrete Mediator**: Implements cooperative behavior by coordinating colleagues
- **Colleague**: Abstract class that defines the interface for colleagues
- **Concrete Colleague**: Implements the colleague interface and communicates with the mediator

## Communication Flow

1. Colleagues send messages to the mediator
2. Mediator decides how to handle the message
3. Mediator forwards messages to appropriate colleagues
4. Colleagues receive messages through the mediator

## Example

The example implements a simple chat room as a mediator between users. Users send messages to ChatRoom (mediator), which then forwards them to all participants. This demonstrates how the mediator centralizes communication and reduces direct dependencies between users. 