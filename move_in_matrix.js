// Game to allow a player to move in a matrix

// Define board as a constant
const board = [];

// Create function to populate board with coordinates
function populateBoard(matrix){
  

  for(let i=0; i<3; i++){
    let tempArr = [];
    
    for(let j=0; j<3; j++){      
      tempArr[j] = { x: i, y: j};      
    }    
    matrix[i] = tempArr;    
  }
    
  return matrix;

}

populateBoard(board);

// Create function to create player
function createPlayer() {
  let player = {
    name: '',
    x: 1,
    y: 1
  }
  
  player.name = prompt("What is your name?");

  return player;

} 

let playerOne = createPlayer();

/*
TODO: create game
1. function to move horizontally
2. function to move vertically
3. function to update grid
*/



