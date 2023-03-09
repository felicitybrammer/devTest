export class Connect4 {
    
    currentPlayer: number = 1;
    turn: number = 1;
    //grid: number[];
    row: number;
    col: number;

    constructor() {

    }
    
    getMove() {
      return this.col;
    }
    
    setMove(col: number) {
      this.row++; //check rows in specific column
      this.col = col;
    }
//if row = 6, return column full
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
      //say whose move it is 
      this.newTurn(this.currentPlayer);


      //log the move
      
      //check for wins (if win, return "player n wins") else return "player n has a turn"
      //what do you need to win? (try 4 moves in same column first)
      


      //check for full column (if so, return "column full") else return "player n has a turn"
      // row variables?
      this.setMove(col);
      if (this.row > 5 ) { //need to connect this to a specific column
        if (this.currentPlayer == 1) {
          console.log('1')
        } 
        return "Column full!"
      }

      return `Player ${this.currentPlayer} has a turn`;
      
      
    }
  }

