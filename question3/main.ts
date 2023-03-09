export class Connect4 {
    //number currentPlayer, row, col,
    //number[][] grid
    // initialize currentPlayer = 1, row = 0;
    currentPlayer: number = 1;
    turn: number = 1;
    constructor() {
     
      
    }
    

    newTurn(_currentPlayer){
      this.currentPlayer == 1 ? this.currentPlayer = 2 : this.currentPlayer = 1
      return this.currentPlayer;
    }

    play(col: number): string{
      //display strings to show whose turn it is
      if (this.turn == 1) {
        this.turn++;
        return `Player 1 has a turn`;  
      }

      this.newTurn(this.currentPlayer);

      //check for wins (if win, return "player n wins") else return "player n has a turn"
      //what do you need to win? 


      //check for full column (if so, return "column full") else return "player n has a turn"
      // columnCount variables?
      
      return `Player ${this.currentPlayer} has a turn`;
      
      
    }
  }

