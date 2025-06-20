# Strategy Pattern

## Description

Strategy is a behavioral design pattern that defines a family of similar algorithms and places each of them in its own class (refactoring.guru). This allows you to replace one algorithm with another during program execution without changing the client code that uses this algorithm. The context object uses a "strategy" interface to call the algorithm, and concrete strategies implement this interface in different ways. Thus, you can easily add new algorithms or vary program behavior by substituting different strategies.

## Key Benefits

- **Algorithm selection**: Choose algorithms at runtime
- **Eliminates conditional statements**: Replaces if/else chains with strategy objects
- **Open/Closed principle**: Open for extension, closed for modification
- **Single responsibility**: Each strategy has one specific algorithm
- **Easy testing**: Each strategy can be tested independently

## Use Cases

- Sorting algorithms (bubble sort, quick sort, merge sort)
- Payment methods (credit card, PayPal, cryptocurrency)
- Compression algorithms (ZIP, RAR, 7z)
- Navigation strategies (car, walking, public transport)
- Validation strategies (email, phone, credit card validation)
- Caching strategies (LRU, LFU, FIFO)

## Structure

The pattern consists of:
- **Strategy**: Interface that declares the algorithm method
- **Concrete Strategy**: Implements the algorithm interface
- **Context**: Uses the strategy interface and maintains a reference to a strategy object
- **Client**: Creates and configures the context with a specific strategy

## Strategy Selection

- **Runtime selection**: Choose strategy based on conditions
- **Configuration-based**: Set strategy through configuration
- **User selection**: Allow users to choose preferred strategy
- **Performance-based**: Select strategy based on data characteristics

## Implementation Approaches

- **Function-based**: Use functions as strategies (JavaScript)
- **Class-based**: Use classes implementing a common interface
- **Object-based**: Use objects with method properties

## Example

The example implements a sorting class that can use different sorting strategies (such as bubble sort or quick sort). The algorithm choice is made a parameter that can be changed dynamically, demonstrating how the same context can use different strategies without changing the client code. 