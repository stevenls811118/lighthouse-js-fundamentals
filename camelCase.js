const camelCase = function(input) {
  // Your code here
  let array = input.split(" ");
  let result = "";
  for(let i = 0; i < array.length; i++) {
    if(i === 0) {
      let firstWord = array[i][0].toLowerCase() + array[i].slice(1, array[i].length);
      result += firstWord;
    } else {
      let temp = array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
      result += temp;
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("The quick brown fox jumps over the lazy dog."))