class Logger {
  constructor(level) {
    this.level = level;
    this.next = null;
  }
  setNext(nextLogger) {
    this.next = nextLogger;
    return nextLogger;
  }
  message(msg, severity) {
    if (severity >= this.level) {
      this.write(msg);
    }
    if (this.next) {
      this.next.message(msg, severity);
    }
  }
  write(msg) { /* abstract */ }
}

class ConsoleLogger extends Logger {
  write(msg) {
    console.log(`Console: ${msg}`);
  }
}
class FileLogger extends Logger {
  write(msg) {
    console.log(`File: writing "${msg}" to log`);
  }
}
class EmailNotifier extends Logger {
  write(msg) {
    console.log(`Email: sending notification "${msg}"`);
  }
}

// Setting up the chain:
const consoleLogger = new ConsoleLogger(1);
const fileLogger = new FileLogger(2);
const emailNotifier = new EmailNotifier(3);
consoleLogger.setNext(fileLogger).setNext(emailNotifier);

// Generating messages of different importance:
consoleLogger.message("Minor issue", 1);
// Console: Minor issue

consoleLogger.message("Something went wrong", 2);
// Console: Something went wrong
// File: writing "Something went wrong" to log

consoleLogger.message("System failure!", 3);
// Console: System failure!
// File: writing "System failure!" to log
// Email: sending notification "System failure!" 