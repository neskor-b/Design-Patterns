class Editor {
  constructor() {
    this.text = '';
  }
  type(word) {
    this.text += word;
  }
  getContent() {
    return this.text;
  }
  save() {
    // return new memento object
    return new EditorMemento(this.text);
  }
  restore(memento) {
    // restore state from passed memento
    this.text = memento.getContent();
  }
}

class EditorMemento {
  constructor(content) {
    this.content = content;  // save state (text)
  }
  getContent() {
    return this.content;
  }
}

// Usage:
const editor = new Editor();
editor.type('Hello, ');
editor.type('world!');
console.log(editor.getContent());  // Hello, world!

const saved = editor.save();      // saved state ("Hello, world!")
editor.type(' Additional text.');
console.log(editor.getContent());  // Hello, world! Additional text.

editor.restore(saved);            // rolled back to saved state
console.log(editor.getContent());  // Hello, world! 