class WeatherStation {
  constructor() {
    this.observers = new Set();
    this.temperature = null;
  }
  subscribe(observer) {
    this.observers.add(observer);
  }
  unsubscribe(observer) {
    this.observers.delete(observer);
  }
  setTemperature(temp) {
    console.log(`WeatherStation: new temperature = ${temp}`);
    this.temperature = temp;
    this.notify();
  }
  notify() {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDisplay {
  update(temp) {
    console.log(`TemperatureDisplay: reacting, new temperature = ${temp}`);
  }
}
class Fan {
  update(temp) {
    if (temp > 25) {
      console.log('Fan: It\'s hot, turning ON fan.');
    } else {
      console.log('Fan: Temperature is fine, turning OFF fan.');
    }
  }
}

// Usage:
const station = new WeatherStation();
const display = new TemperatureDisplay();
const fan = new Fan();
station.subscribe(display);
station.subscribe(fan);

station.setTemperature(20);
// WeatherStation: new temperature = 20
// TemperatureDisplay: reacting, new temperature = 20
// Fan: Temperature is fine, turning OFF fan.

station.setTemperature(30);
// WeatherStation: new temperature = 30
// TemperatureDisplay: reacting, new temperature = 30
// Fan: It's hot, turning ON fan. 