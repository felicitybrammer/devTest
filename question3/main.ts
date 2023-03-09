export class Connect4 {
  currentPlayer: number = 1;
  turn: number = 1;
  col: number;
  row0: number = 0;
  row1: number = 0;
  row2: number = 0;
  row3: number = 0;
  row4: number = 0;
  row5: number = 0;

  constructor() {}

  getMove() {
    return this.col;
  }

  setMove(col: number) {
    this.col = col;

    switch (col) {
      case 0:
        this.row0++;
        break;
      case 1:
        this.row1++;
        break;
      case 2:
        this.row2++;
        break;
      case 3:
        this.row3++;
        break;
      case 4:
        this.row4++;
        break;
      case 5:
        this.row5++;
        break;
    }

    if (this.row0 > 5 || this.row1 > 5 || this.row2 > 5 || this.row3 > 5 ||this.row4 > 5 || this.row5 > 5) {
      return "Column full!";
    } else {
      return `Player ${this.currentPlayer} has a turn`;
    }
  }
  //if row = 6, return column full
  newTurn(_currentPlayer) {
    this.currentPlayer == 1
      ? (this.currentPlayer = 2)
      : (this.currentPlayer = 1);
    this.turn++;
    return this.currentPlayer;
  }

  play(col: number): string {
    //display strings to show whose turn it is
    if (this.turn == 1) {
      this.turn++;
      return `Player 1 has a turn`;
    }
    //say whose move it is
    this.newTurn(this.currentPlayer);

    //log the move

    //check for wins (if win, return "player n wins") else return "player n has a turn"
    //what do you need to win? (try 4 moves in same column first)

    //check for full column (if so, return "column full") else return "player n has a turn"
    // row variables?
    return this.setMove(col);
    // if (this.row0 > 5 || this.row1 > 5 || this.row4 > 5) {
    //   //need to connect this to a specific column

    //   return "Column full!";
    // } else {
    //   return `Player ${this.currentPlayer} has a turn`;
    // }
  }
}
