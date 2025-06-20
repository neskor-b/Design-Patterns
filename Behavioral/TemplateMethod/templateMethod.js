class Game {
  play() {
    this.initialize();
    while (!this.isGameOver()) {
      this.makeMove();
    }
    this.end();
  }
  initialize() { throw new Error('Not implemented'); }
  isGameOver() { throw new Error('Not implemented'); }
  makeMove() { throw new Error('Not implemented'); }
  end() { throw new Error('Not implemented'); }
}

class Chess extends Game {
  initialize() { console.log('Setting up chess pieces on the board'); }
  isGameOver() { 
    // logic for determining end of game (simplified):
    return Math.random() < 0.1; 
  }
  makeMove() { console.log('Making a chess move'); }
  end() { console.log('Game finished: announcing checkmate'); }
}

// Usage:
const game = new Chess();
game.play();
// Setting up chess pieces on the board
// Making a chess move
// Making a chess move
// ... (several moves until isGameOver() returns true) ...
// Game finished: announcing checkmate 