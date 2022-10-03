const array = [10, 2, 5, 1, 9];

let result = array.sort((a, b) => a - b);

console.log(result);

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const sorting = function(array) {

  array.sort((a, b) => {
    if (a["name"] < b["name"]) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  array.sort((a, b) => {
    if (a.name === b.name) {
      return b.age - a.age;
    }
  });
  return array;
};

console.log(sorting(students));