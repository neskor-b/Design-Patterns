class ChatRoom {
  constructor() {
    this.users = new Set();
  }
  register(user) {
    this.users.add(user);
    user.room = this;
  }
  send(sender, message) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(sender, message);
      }
    }
  }
}

class User {
  constructor(name) { this.name = name; this.room = null; }
  send(message) {
    if (this.room) {
      this.room.send(this, message);
    }
  }
  receive(sender, message) {
    console.log(`${this.name} received from ${sender.name}: ${message}`);
  }
}

// Usage:
const room = new ChatRoom();
const alice = new User('Alice');
const bob = new User('Bob');
const charlie = new User('Charlie');

room.register(alice);
room.register(bob);
room.register(charlie);

alice.send("Hello everyone!");
// Bob received from Alice: Hello everyone!
// Charlie received from Alice: Hello everyone! 