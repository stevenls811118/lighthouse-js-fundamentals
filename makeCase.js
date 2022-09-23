const makeCase = function(input, style) {
  // Put your solution here
  let temp = "";
  const stepOne = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  const stepTwo = ['vowel', 'consonant'];
  const stepThree = ['upper', 'lower'];
  const order = {one: '', two: '', three: ''}; 

  if(style.constructor === Array) {
    for(let i = 0; i < style.length; i++) {
      if(stepOne.includes(style[i])) {
        order.one = style[i];
      } else if(stepTwo.includes(style[i])) {
        order.two = style[i];
      } else if(stepThree.includes(style[i])) {
        order.three = style[i];
      }
    }
    switch(order.one) {
      case "camel":
        temp = camel(input);
        break;
      case "pascal":
        temp = pascal(input);
        break;
      case "snake":
        temp = snake(input);
        break;
      case "kebab":
        temp = kebab(input);
        break;
      case "title":
        temp = title(input);
        break;
    }
    switch(order.two) {
      case "vowel":
        temp = vowel(temp);
        break;
      case "consonant":
        temp = consonant(temp);
        break;
    }
    switch(order.three) {
      case "upper":
        temp = temp.toUpperCase();
        break;
      case "lower":
        temp = temp.toLowerCase();
        break;
    } 
  } else {
    if(style === "upper") {
      temp = input.toUpperCase();
    } else if (style === "lower") {
      temp = input.toLowerCase();
    } else if (style === "vowel") {
      temp = vowel(input);
    } else if (style === "consonant") {
      temp = consonant(input);
    } else if (style === "camel") {
      temp = camel(input);
    } else if (style === "pascal") {
      temp = pascal(input);
    } else if (style === "snake") {
      temp = snake(input);
    } else if (style === "kebab") {
      temp = kebab(input);
    } else if (style === "title") {
      temp = title(input);
    } 
  }
  return temp;
}

const camel = function(input) {
  let array = input.split(" ");
  for(let i = 0; i < array.length; i++) {
    if(i === 0) {
      array[i] = array[i].toLowerCase();
    } else {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
    }
  }
  let result = array.join('');
  return result;
}

const pascal = function(input) {
  let array = input.split(" ");
  for(let i = 0; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
  }  
  let result = array.join('');
  return result;
}

const snake = function(input) {  
  return input.replace(/ /g, "_")
}

const kebab = function(input) {
  return input.replace(/ /g, "-")
}

const title = function(input) {
  let array = input.split(" ");
  for(let i = 0; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
  }
  let result = array.join(' ');
  return result;
}

const vowel = function(input) {
  let array = input.split("");
  for(let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case "a":
        array[i] = "A";
        break;
      case "e":
        array[i] = "E";
        break;  
      case "i":
        array[i] = "I";
        break;
      case "o":
        array[i] = "O";
        break;
      case "u":
        array[i] = "U";
        break;
      default:
        array[i] = array[i].toLowerCase();  
    }
  }
  return array.join("");
}

const consonant = function(input) {
  let array = input.split("");
  for(let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case "a":
        array[i] = "a";
        break;
      case "e":
        array[i] = "e";
        break;  
      case "i":
        array[i] = "i";
        break;
      case "o":
        array[i] = "o";
        break;
      case "u":
        array[i] = "u";
        break;
      default:
        array[i] = array[i].toUpperCase();  
    }
  }
  return array.join("");
}    


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
