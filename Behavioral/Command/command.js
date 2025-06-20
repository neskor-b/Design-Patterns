// Receiver (command recipient):
class TextEditor {
  constructor() { this.text = ''; }
  addWord(word) { this.text += word; }
  removeLastWord() { this.text = this.text.replace(/\w+\s?$/, ''); }
  show() { console.log('Text:', this.text); }
}

// Command interface:
class Command {
  execute() { throw new Error('Not implemented'); }
  undo() { throw new Error('Not implemented'); }
}

// Concrete commands:
class AddWordCommand extends Command {
  constructor(editor, word) {
    super();
    this.editor = editor;
    this.word = word;
  }
  execute() {
    this.editor.addWord(this.word);
  }
  undo() {
    this.editor.removeLastWord();
  }
}
class RemoveLastWordCommand extends Command {
  constructor(editor) {
    super();
    this.editor = editor;
    this.removedWord = '';
  }
  execute() {
    // Save the removed word for undo capability
    const match = this.editor.text.match(/(\w+\s*)$/);
    this.removedWord = match ? match[0] : '';
    this.editor.removeLastWord();
  }
  undo() {
    if (this.removedWord) {
      this.editor.addWord(this.removedWord);
    }
  }
}

// Command history (Invoker):
class CommandHistory {
  constructor() { this.history = []; }
  run(command) {
    command.execute();
    this.history.push(command);
  }
  undo() {
    const command = this.history.pop();
    if (command) command.undo();
  }
}

// Usage:
const editor = new TextEditor();
const history = new CommandHistory();

history.run(new AddWordCommand(editor, 'Hello '));
history.run(new AddWordCommand(editor, 'world!'));
editor.show();            // Text: Hello world!
history.run(new RemoveLastWordCommand(editor));
editor.show();            // Text: Hello 
history.undo();           // undo last command (removal)
editor.show();            // Text: Hello world! 