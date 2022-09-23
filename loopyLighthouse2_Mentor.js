const addToOutput = function(output, addCondition, word) {
  if (addCondition) output += word;
  return output;
};

const isItMultiplier = function(numOne, numTwo) {
  return !(numOne % numTwo);
};


const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";
    //if(!(i % multiples[0])) output += words[0];
    //if(isItMultiplier(i, multiples[0])) output += words[0];
    output = addToOutput(output, isItMultiplier(i, multiples[0]), words[0]);
    output = addToOutput(output, isItMultiplier(i, multiples[1]), words[1]);
    console.log(output ? output : i);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);