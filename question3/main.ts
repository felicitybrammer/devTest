export class Connect4 {
  currentPlayer: number;
  turn: number;
  grid: string[][];
  win: boolean;

  constructor() {
    this.currentPlayer = 1;
    //set up blank grid
    this.grid = Array.from(Array(6), () => Array(7).fill(" ")); //TODO: fill a grid with ' '
    this.turn = 1;
    this.win = false;
  }

  // newTurn(currentPlayer: number): number {
  //   this.currentPlayer === 1
  //     ? (this.currentPlayer = 2)
  //     : (this.currentPlayer = 1);
  //   this.turn++;
  //   return this.currentPlayer;
  // }

  checkForWin(row: number, col: number): boolean {
    const taken = this.grid[row][col];

    //TODO: test to see if 4 vertical spaces are taken by a player
    if (taken) return true; //dummy condition for testing
    return false;
  }

  play(col: number): string {
    if (this.win) {
      return "Game has finished!";
    }

    //log the move, check for full columns and check for wins
    // log how many rows have been filled in each column

    let row = 0; //max row possible
    //check for full columns by
    while (row >= 0) {
      if (this.grid[row][col] == " ") {
        this.grid[row][col] = this.currentPlayer.toString();
        break;
      }
      row++;
    }
    if (row > 5) {
      return "Column full!";
    }

    if (this.checkForWin(row, col)) {
      //check for wins
      this.win = true;
      return `Player ${this.currentPlayer} wins!`;
    }
    //display strings to show whose turn it is
    if (this.turn == 1) {
      this.turn++;
      return `Player 1 has a turn`;
    } else {
      //say whose move it is
      this.currentPlayer === 1
        ? (this.currentPlayer = 2)
        : (this.currentPlayer = 1);
      this.turn++;
      return `Player ${this.currentPlayer} has a turn`;
    }
  }
}
