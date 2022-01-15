// Game to allow a player to move in a matrix

// Define board constant
const board = [];

// Create function to create board
const board = [];

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

