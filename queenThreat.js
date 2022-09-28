const generateBoard = function(arrayOne, arrayTwo) {
  let array = [];
  for (let r = 0; r < 8; r++) {
    array[r] = [];
    for (let c = 0; c < 8; c++) {
      array[r][c] = 0;
    }
  }
  array[arrayOne[0]][arrayOne[1]] = 1;
  array[arrayTwo[0]][arrayTwo[1]] = 1;
  return array;
};



let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);


//console.log(queenThreat(generatedBoard));
//let board = JSON.stringify(generatedBoard)
//console.log(board);