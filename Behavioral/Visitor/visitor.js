// Visitable interface:
class Shape {
  accept(visitor) {
    visitor.visit(this);
  }
}
class Dot extends Shape {
  constructor(x, y) { super(); this.x = x; this.y = y; }
}
class Circle extends Shape {
  constructor(x, y, radius) { super(); this.x = x; this.y = y; this.radius = radius; }
}
class Rectangle extends Shape {
  constructor(x, y, width, height) { super(); this.x = x; this.y = y; this.width = width; this.height = height; }
}

// Visitor classes with methods for each type:
class DrawVisitor {
  visit(shape) {
    if (shape instanceof Dot) {
      console.log(`Drawing a Dot at (${shape.x}, ${shape.y})`);
    } else if (shape instanceof Circle) {
      console.log(`Drawing a Circle at (${shape.x}, ${shape.y}) with radius ${shape.radius}`);
    } else if (shape instanceof Rectangle) {
      console.log(`Drawing a Rectangle at (${shape.x}, ${shape.y}) of size ${shape.width}x${shape.height}`);
    }
  }
}
class AreaVisitor {
  visit(shape) {
    if (shape instanceof Dot) {
      console.log('Area of Dot = 0');
    } else if (shape instanceof Circle) {
      const area = Math.PI * shape.radius * shape.radius;
      console.log(`Area of Circle = ${area.toFixed(2)}`);
    } else if (shape instanceof Rectangle) {
      const area = shape.width * shape.height;
      console.log(`Area of Rectangle = ${area}`);
    }
  }
}

// Usage:
const shapes = [
  new Dot(1, 2),
  new Circle(0, 0, 5),
  new Rectangle(0, 0, 3, 4)
];
const drawVisitor = new DrawVisitor();
const areaVisitor = new AreaVisitor();
for (const shape of shapes) {
  shape.accept(drawVisitor);
}
for (const shape of shapes) {
  shape.accept(areaVisitor);
} 