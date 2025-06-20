// Complex subsystems:
class TV {
  turnOn() { console.log('TV is on'); }
  turnOff() { console.log('TV is off'); }
}
class SoundSystem {
  turnOn() { console.log('Sound system is on'); }
  turnOff() { console.log('Sound system is off'); }
}
class GameConsole {
  turnOn() { console.log('Console is on'); }
  turnOff() { console.log('Console is off'); }
}

// Facade:
class HomeTheaterFacade {
  constructor() {
    this.tv = new TV();
    this.sound = new SoundSystem();
    this.console = new GameConsole();
  }
  watchMovie() {
    console.log('Starting movie...');
    this.tv.turnOn();
    this.sound.turnOn();
    this.console.turnOn();
  }
  endMovie() {
    console.log('Shutting down movie...');
    this.console.turnOff();
    this.sound.turnOff();
    this.tv.turnOff();
  }
}

// Using the facade:
const theater = new HomeTheaterFacade();
theater.watchMovie();
// Starting movie...
// TV is on
// Sound system is on
// Console is on

theater.endMovie();
// Shutting down movie...
// Console is off
// Sound system is off
// TV is off 