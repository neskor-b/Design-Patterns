// Common interface Component with show() method:
class FileSystemEntity {
  show(indent = 0) { throw new Error('Not implemented'); }
}

// Leaf - file (has no children):
class File extends FileSystemEntity {
  constructor(name) {
    super();
    this.name = name;
  }
  show(indent = 0) {
    console.log(' '.repeat(indent) + this.name);
  }
}

// Container - folder (can contain files and folders):
class Folder extends FileSystemEntity {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }
  add(entity) {
    this.children.push(entity);
  }
  show(indent = 0) {
    console.log(' '.repeat(indent) + this.name + '/');
    for (const child of this.children) {
      child.show(indent + 2);
    }
  }
}

// Usage:
const root = new Folder('root');
const file1 = new File('file1.txt');
const subFolder = new Folder('subfolder');
const file2 = new File('file2.txt');

root.add(file1);
root.add(subFolder);
subFolder.add(file2);

root.show();
// Output:
// root/
//   file1.txt
//   subfolder/
//     file2.txt 