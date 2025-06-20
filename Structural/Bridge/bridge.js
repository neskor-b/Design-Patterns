// Implementation (color hierarchy):
class Color {
  applyColor(shape) { /* base method */ }
}
class Red extends Color {
  applyColor(shape) {
    console.log(`Painting ${shape} in Red`);
  }
}
class Blue extends Color {
  applyColor(shape) {
    console.log(`Painting ${shape} in Blue`);
  }
}

// Abstraction (shape hierarchy):
class Shape {
  constructor(color) {
    this.color = color;  // composition: reference to Color
  }
  draw() { /* implemented in subclasses */ }
}
class Circle extends Shape {
  draw() {
    this.color.applyColor('Circle');
  }
}
class Square extends Shape {
  draw() {
    this.color.applyColor('Square');
  }
}

// Usage:
const redCircle = new Circle(new Red());
redCircle.draw();    // Painting Circle in Red

const blueSquare = new Square(new Blue());
blueSquare.draw();   // Painting Square in Blue 