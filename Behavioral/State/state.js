class Light {
  constructor() {
    this.state = new OffState();  // initial state - off
  }
  pressButton() {
    // delegate action to current state
    this.state.handlePress(this);
  }
}

// Base state class (not required, but for structure):
class LightState {
  handlePress(light) { throw new Error('Not implemented'); }
}

class OnState extends LightState {
  handlePress(light) {
    console.log('Button pressed: turning off the light.');
    light.state = new OffState();  // transition to "off" state
  }
}
class OffState extends LightState {
  handlePress(light) {
    console.log('Button pressed: turning on the light.');
    light.state = new OnState();   // transition to "on" state
  }
}

// Usage:
const lamp = new Light();
lamp.pressButton();  // Button pressed: turning on the light.
lamp.pressButton();  // Button pressed: turning off the light.
lamp.pressButton();  // Button pressed: turning on the light. 