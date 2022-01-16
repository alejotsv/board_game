// Game to allow a player to move in a matrix

// Define board as a constant
const board = [];

// Create function to populate board with coordinates
function populateBoard(matrix,dimension){
  
  let line = 0;

  for(let i=dimension; i>=0; i--){
    let tempArr = [];
    
    for(let j=dimension; j>=0; j--){      
      tempArr[j] = { x: j, y: i};      
    }    
    matrix[line] = tempArr;
    line++;
  }
  
  console.log(matrix);
  return matrix;

}

populateBoard(board,3);

// Create function to create player
function createPlayer() {
  let player = {
    name: '',
    x: 0,
    y: 0
  }
  
  player.name = prompt("What is your name?");

  return player;

} 

let playerOne = createPlayer();

function moveRight(player,board) {  
  player.x++;
  console.log("You moved right. You are now located at:")
  console.log("X: " + player.x);
  console.log("Y: " + player.y);
  return player;
}

function moveLeft(player,board) {
  player.x--;
  console.log("You moved left. You are now located at:")
  console.log("X: " + player.x);
  console.log("Y: " + player.y);
  return player;
}

function moveUp(player,board){
  player.y++;
  console.log("You moved up. You are now located at:")
  console.log("X: " + player.x);
  console.log("Y: " + player.y);
  return player;
}

function moveDown(player,board){
  player.y--;
  console.log("You moved down. You are now located at:")
  console.log("X: " + player.x);
  console.log("Y: " + player.y);
  return player;
}

console.log(playerOne);

moveDown(playerOne,board);
