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

function moveRight(player,dimension) {
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

function moveLeft(player,dimension) {
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

function moveUp(player,dimension){
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

function moveDown(player,dimension){
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

function makeMove(player,board,dimension,movements,playing){
  let direction;

  while(playing){
    direction = prompt("Where do you want to go?");

    switch(direction){
      case "r":
      case "R":
      moveRight(player,dimension);
      movements.push("R");
      break;

      case "l":
      case "L":
      moveLeft(player,dimension);
      movements.push("L");
      break;

      case "u":
      case "U":
      moveUp(player,dimension);
      movements.push("U");
      break;

      case "d":
      case "D":
      moveDown(player,dimension);
      movements.push("D");
      break;

      case "b":
      case "B":
      console.log(board);
      break;

      case "p":
      case "P":
      console.log("You are located at:")
      console.log("X: " + player.x);
      console.log("Y: " + player.y);
      break;

      case "m":
      case "M":
      console.log("Movements tried: " + movements);
      break;

      case "q":
      case "Q":
      console.log("Thank you for playing!");
      playing = false;
      break;

      default:
      console.log("Please use a valid command.");
    }
    
  }
}


function playBoardGame(){
  // Define board as a constant
  const board = [];
  let movements = [];
  let playing = true;

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
  console.log("Now move around the board. You cannot go out of the board limits.");
  console.log("You can move right, left, up, and down.");
  console.log("Use the following commands:");
  console.log("r = move right");
  console.log("l = move left");
  console.log("u = move up");
  console.log("d = move down");
  console.log("b = see the board");
  console.log("p = print current position");
  console.log("m = see all movements");
  console.log("q = quit the game");
  console.log("-----------------------------");

  
  makeMove(player,board,dimension,movements,playing);


}


playBoardGame();