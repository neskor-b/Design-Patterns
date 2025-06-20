# Chain of Responsibility Pattern

## Description

Chain of Responsibility is a behavioral design pattern that allows you to pass requests sequentially through a chain of handlers. Each subsequent handler decides whether it can handle the request itself and whether it should pass the request further down the chain (slideshare.net). Thus, the sender of the request does not know which specific object will handle it - the request "flows" through the chain until a responsible one is found. This reduces the coupling between the sender and potential recipients of the request.

## Key Benefits

- **Loose coupling**: Sender doesn't need to know about specific handlers
- **Flexible handling**: Easy to add or remove handlers from the chain
- **Single responsibility**: Each handler has one specific responsibility
- **Dynamic chain**: Chain can be modified at runtime
- **Fallback mechanism**: Automatic fallback if no handler can process the request

## Use Cases

- Event handling systems
- Logging systems with different levels
- Exception handling
- Middleware in web frameworks
- GUI event processing
- Authentication and authorization chains

## Structure

The pattern consists of:
- **Handler**: Abstract class that defines the interface for handling requests
- **Concrete Handler**: Implements the handling logic and maintains reference to next handler
- **Client**: Initiates requests to the first handler in the chain
- **Request**: The object being passed through the chain

## Chain Setup

Handlers can be chained together in any order:
```javascript
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
handler1.setNext(handler2);
```

## Example

The example implements a chain for processing error messages. There are several levels: ConsoleLogger (outputs to console), FileLogger (writes to file), EmailNotifier (sends email). Each can handle a certain level of error criticality, and if not, passes it further down the chain. 