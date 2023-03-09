export class Connect4 {
  currentPlayer: number = 1;
  turn: number = 1;
  col: number;
  grid: number[];
  row0: number = 0;
  row1: number = 0;
  row2: number = 0;
  row3: number = 0;
  row4: number = 0;
  row5: number = 0;
  win: boolean = false;

  constructor() {}

  // getMove() {
  //   return this.col;
  // }

  setMove(col: number) {
    this.col = col;
    // log how many rows have been fille in each column
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
    //check for full columns
    if (this.row0 > 5 || this.row1 > 5 || this.row2 > 5 || this.row3 > 5 ||this.row4 > 5 || this.row5 > 5) {
      return "Column full!";
     } 
    else if (this.checkForWin(this.grid)) { 
       //check for wins
       
       return `Player ${this.currentPlayer} wins! Game has finished!`
     }
     else {
      return `Player ${this.currentPlayer} has a turn`;
    }
  }
  
  newTurn(_currentPlayer) {
    this.currentPlayer == 1
      ? (this.currentPlayer = 2)
      : (this.currentPlayer = 1);
    this.turn++;
    return this.currentPlayer;
  }

  checkForWin(_grid) {
    //check for vertical win
    for (let i:number = 0; i < this.grid.length; i++) {
      if (this.grid[i] && this.grid[i+7] && this.grid[i+14] && this.grid[i+21]) {
        return true;
      }
      return false;
    }
    
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
    return this.setMove(this.col);
   
  }
}
