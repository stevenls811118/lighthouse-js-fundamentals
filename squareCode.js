const squareCode = function(message) {
  // Put your solution here
  let noSpaceStr = message.replace(/ /g, "");
  let rowLength = Math.ceil(Math.sqrt(noSpaceStr.length));
  let columnLength = Math.ceil(noSpaceStr.length / rowLength);
  let array = noSpaceStr.split('');

  for (let i = rowLength; i < array.length; i = i + rowLength + 1) {
    array.splice(i, 0, '\n');
  }

  let squareStr = array.join("");
  let result = "";

  for (let a = 0; a < rowLength; a++) {
    for (let b = 0; b < columnLength; b++) {
      if (a + (rowLength + 1) * b < squareStr.length) {
        result += squareStr[a + (rowLength + 1) * b];
      }
    }
    result += " ";
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
