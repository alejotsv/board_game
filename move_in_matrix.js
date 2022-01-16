// Game to allow a player to move in a matrix

// Define board as a constant
const board = [];

// Create function to populate board with coordinates
function populateBoard(matrix){
  
  let line = 0;

  for(let i=2; i>=0; i--){
    let tempArr = [];
    
    for(let j=2; j>=0; j--){      
      tempArr[j] = { x: j, y: i};      
    }    
    matrix[line] = tempArr;
    line++;
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
3. function to update grid
*/

function moveRight(player) {
  player.x++;
  return player;
}

function moveLeft(player) {
  player.x--
  return player;
}

function moveUp(player){
  player.y--;
  return player;
}

function moveDown(player){
  player.y++;
  return player;
}

