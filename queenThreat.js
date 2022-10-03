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

const queenThreat = function(whiteQueen, blackQueen) {
  if (whiteQueen[0] + whiteQueen[1] === blackQueen[0] + blackQueen[1] || whiteQueen[0] - whiteQueen[1] === blackQueen[0] - blackQueen[1] || whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  }
  return false;
};


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(whiteQueen, blackQueen));

let whiteQueen1 = [0, 0];
let blackQueen1 = [5, 7];
let generatedBoard1 = generateBoard(whiteQueen1, blackQueen1);
console.table(generatedBoard1);
console.log(queenThreat(whiteQueen1, blackQueen1));


