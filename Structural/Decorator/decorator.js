class MessageSender {
  send(message) {
    console.log(`Sending message: ${message}`);
    // ... actual sending
  }
}

// Decorator that adds timestamp logging:
class TimestampedSender {
  constructor(sender) {
    this.sender = sender;
  }
  send(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}]`);         // additional functionality
    this.sender.send(message);             // delegation to original object
  }
}

// Usage:
const sender = new MessageSender();
const decoratedSender = new TimestampedSender(sender);
decoratedSender.send("Hello");
// [2025-06-20T09:07:08.123Z]
// Sending message: Hello 