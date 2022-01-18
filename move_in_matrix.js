// Game to allow a player to move in a matrix

// Create function to populate board with coordinates
function populateBoard(matrix,dimension){  
  let line = 0;

  for(let i=dimension-1; i>=0; i--){
    let tempArr = [];
    
    for(let j=dimension-1; j>=0; j--){      
      tempArr[j] = { x: j, y: i};      
    }    
    matrix[line] = tempArr;
    line++;
  }
  
  console.log("This is your board");
  console.log(matrix);
  return matrix;

}

// populateBoard(board,3);

// Function to create player
function createPlayer() {
  let player = {
    name: '',
    x: 0,
    y: 0
  }
  
  player.name = prompt("What is your name?");

  return player;

} 

// let playerOne = createPlayer();

function moveRight(player,board,dimension) {
  if(player.x+1 == dimension){
    console.log("You are at the limit. Choose another direction.");
    console.log("You are located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
  } else {
    player.x++;
    console.log("You moved right. You are now located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
    return player;
  }  
}

function moveLeft(player,board,dimension) {
  if(player.x == 0){
    console.log("You are at the limit. Choose another direction.");
    console.log("You are located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
  } else {
    player.x--;
    console.log("You moved left. You are now located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
    return player;
  }
}

function moveUp(player,board,dimension){
  if(player.y+1 == dimension){
    console.log("You are at the limit. Choose another direction.");
    console.log("You are located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
  } else {
    player.y++;
    console.log("You moved up. You are now located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
    return player;
  }
}

function moveDown(player,board,dimension){
  if(player.y == 0){
    console.log("You are at the limit. Choose another direction.");
    console.log("You are located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
  } else {
    player.y--;
    console.log("You moved down. You are now located at:")
    console.log("X: " + player.x);
    console.log("Y: " + player.y);
    return player;
  }
}


function playBoardGame(){
  // Define board as a constant
  const board = [];  

  // Welcome message
  console.log("Welcome to the Board Explorer. First, let's create your player");

  // Create player
  let player = createPlayer();

  console.log("Hello, " + player.name + "!");
  console.log("Now choose the scale of the board.")

  const dimension = prompt("Type the scale of the board:");

  populateBoard(board,dimension);

  console.log("-----------------------------")
  console.log("You are located at:")
  console.log("X: " + player.x);
  console.log("Y: " + player.y);


}

playBoardGame();

/* TODO: create game based on existing functions
1. prompts for username, board dimensions, and movements
2. create array to store all movements (only valid?)
3. instruction to exit
4. instruction to show current position
*/
