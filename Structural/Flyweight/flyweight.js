// Flyweight - Letter class
class Letter {
  constructor(char) {
    this.char = char; // intrinsic state (character)
  }
  draw(extrinsicState) {
    // extrinsicState contains external state, e.g., font
    console.log(`Drawing '${this.char}' with font ${extrinsicState.font}`);
  }
}

// Flyweight factory - will reuse Letter objects
class LetterFactory {
  constructor() {
    this.letters = {};
  }
  getLetter(char) {
    if (!this.letters[char]) {
      this.letters[char] = new Letter(char);
    }
    return this.letters[char];
  }
  getCount() {
    return Object.keys(this.letters).length;
  }
}

// Usage:
const factory = new LetterFactory();
const letterA1 = factory.getLetter('A');
const letterA2 = factory.getLetter('A');
console.log(letterA1 === letterA2);  // true, one object per character 'A'
letterA1.draw({ font: 'Arial' });
letterA2.draw({ font: 'Times New Roman' });
// Drawing 'A' with font Arial
// Drawing 'A' with font Times New Roman
console.log(`Letters created: ${factory.getCount()}`);  // Letters created: 1 