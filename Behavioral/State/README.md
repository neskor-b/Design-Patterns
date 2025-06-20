# State Pattern

## Description

State is a behavioral design pattern that allows objects to change their behavior depending on their state (refactoring.guru). From the outside, it creates the impression that the object's class is changing, although in reality only the internal state and the logic associated with it changes. The State pattern suggests extracting the object's state into separate classes (each class is a separate possible state) and delegating the execution of appropriate actions to them. When the state changes, the context object simply starts referring to another state object, thereby changing its behavior.

## Key Benefits

- **Eliminates conditional statements**: Replaces complex if/else chains with state objects
- **Encapsulates state-specific behavior**: Each state handles its own logic
- **Easy state transitions**: State changes are explicit and clear
- **Extensibility**: Easy to add new states without changing existing code
- **Single responsibility**: Each state class has one responsibility

## Use Cases

- Game character states (idle, walking, running, jumping)
- Order processing systems (pending, confirmed, shipped, delivered)
- Traffic light systems
- Document workflow states
- Vending machine states
- Connection states in networking

## Structure

The pattern consists of:
- **Context**: Maintains a reference to a state object and delegates work to it
- **State**: Abstract class that defines the interface for state-specific behavior
- **Concrete State**: Implements state-specific behavior and handles state transitions

## State Transitions

- **Automatic transitions**: State handles its own transitions
- **Context-controlled transitions**: Context decides when to change states
- **External transitions**: External objects trigger state changes

## Implementation Considerations

- **State objects**: Can be shared or created per context
- **State data**: Can be stored in context or state objects
- **Transition logic**: Can be centralized or distributed
- **State persistence**: States can be saved and restored

## Example

The example demonstrates a light bulb that has on and off states. The behavior of the "on/off" button changes depending on the current state of the light. When the button is pressed, the current state handles the action and transitions to the appropriate new state. 