export class Connect4 {
    //number currentPlayer, row, col,
    //number[][] grid
    // initialize currentPlayer = 1, row = 0;
    currentPlayer: number = 1;
    turn: number = 1;
    constructor() {
      //set up a grid?
      
    }
    

    newTurn(_currentPlayer){
      this.currentPlayer == 1 ? this.currentPlayer = 2 : this.currentPlayer = 1
      return this.currentPlayer;
    }

    play(col: number): string{
      //player n has a turn is logged. // what do we need to show for player 1 to have a turn
      //this.currentPlayer;
      //return `Player ${this.currentPlayer} has a turn`;
     //this.displayPlayer(this.currentPlayer);
     // this.newTurn(this.currentPlayer)
     // this.displayPlayer(this.currentPlayer);
      if (this.turn == 1) {
        this.turn++;
        return `Player 1 has a turn`;  
      }

      this.newTurn(this.currentPlayer);
      return `Player ${this.currentPlayer} has a turn`;
      
      //check col is not full
      //if not full, mark spot as taken
      //check for win
      //next player's turn
    }
  }

  //class is template for objects, constructor initializes object properties
  //what does a connect4 object have?
  // if instance properties' values do not depend on constructor's args, can define them as class fields