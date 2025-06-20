# Observer Pattern

## Description

Observer is a behavioral design pattern that creates a subscription mechanism that allows one object to monitor and react to events that occur in other objects (refactoring.guru). The pattern involves having a Publisher (Subject) that has a list of subscribers (Observers). When the publisher's state changes or a certain event occurs, it sends notifications to all observers by calling a previously registered method (for example, update). This achieves a "one-to-many" relationship: one subject notifies many listeners who react accordingly.

## Key Benefits

- **Loose coupling**: Subject and observers are loosely coupled
- **Dynamic relationships**: Observers can be added/removed at runtime
- **Event-driven architecture**: Supports event-driven programming
- **Automatic notification**: Observers are automatically notified of changes
- **Extensibility**: Easy to add new observers without changing the subject

## Use Cases

- Event handling systems
- Model-View-Controller (MVC) architecture
- User interface frameworks
- Real-time data monitoring
- Publish-subscribe systems
- Stock market tickers
- Weather monitoring systems

## Structure

The pattern consists of:
- **Subject**: Maintains a list of observers and notifies them of state changes
- **Observer**: Interface that observers must implement
- **Concrete Subject**: Implements the subject interface and manages observers
- **Concrete Observer**: Implements the observer interface and reacts to notifications

## Communication Flow

1. Observer subscribes to Subject
2. Subject's state changes
3. Subject notifies all subscribed observers
4. Observers react to the notification

## Implementation Variations

- **Push model**: Subject pushes data to observers
- **Pull model**: Observers pull data from subject
- **Event-based**: Uses event objects instead of direct method calls
- **Filtered notifications**: Only notify observers interested in specific events

## Example

The example demonstrates a simple implementation: there is a WeatherStation class (subject) with subscribe/unsubscribe methods for observers and a setTemperature method for updating data. Observers (such as different displays) implement the update method that reacts to temperature changes. 