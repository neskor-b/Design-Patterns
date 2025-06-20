# Template Method Pattern

## Description

Template Method is a behavioral design pattern that defines the skeleton of an algorithm, delegating responsibility for some of its steps to subclasses (refactoring.guru). In other words, the base class contains the general sequence of actions (algorithm) in the form of a template method, and individual steps of this algorithm are called as methods that can be overridden in subclasses. This allows you to change certain parts of the algorithm without changing its structure and high-level code. The Template Method is often used within class inheritance.

## Key Benefits

- **Code reuse**: Common algorithm structure is defined once in the base class
- **Consistent structure**: All subclasses follow the same algorithm structure
- **Flexibility**: Subclasses can customize specific steps without changing the overall flow
- **Inversion of control**: Base class controls the algorithm flow, subclasses provide specific implementations
- **Reduces duplication**: Eliminates duplicate algorithm code across subclasses

## Use Cases

- Game frameworks with different game types
- Document processing workflows
- Build processes with different configurations
- Data processing pipelines
- Test frameworks with setup/teardown hooks
- Algorithm frameworks with customizable steps

## Structure

The pattern consists of:
- **Abstract Class**: Defines the template method and abstract hook methods
- **Concrete Class**: Implements the abstract methods with specific behavior
- **Template Method**: The main algorithm that calls hook methods
- **Hook Methods**: Abstract or virtual methods that subclasses must implement

## Hook Types

- **Abstract hooks**: Must be implemented by subclasses
- **Virtual hooks**: Can be overridden by subclasses (optional)
- **Concrete hooks**: Default implementations that can be overridden

## Implementation Considerations

- **Method visibility**: Template method is usually public, hooks can be protected
- **Final template**: Template method can be made final to prevent overriding
- **Hook naming**: Use clear, descriptive names for hook methods
- **Documentation**: Clearly document the purpose and contract of each hook

## Example

The example demonstrates an abstract "Game" class that describes a game template: 1) prepare the game, 2) play rounds, 3) determine the winner, 4) end the game. Specific games (such as chess, checkers) will implement the steps in their own way, but the sequence template is the same. 