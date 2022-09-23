const organizeInstructors = function(instructors) {
  // Put your solution here
  let obj = {};
  // using for loop first thought
  /*for(let i = 0; i < instructors.length; i++) {   
    if(!obj[instructors[i]["course"]]) {
      obj[instructors[i]["course"]] = [];
      obj[instructors[i]["course"]].push(instructors[i]["name"]);
    } else {
      obj[instructors[i]["course"]].push(instructors[i]["name"]);
    }
  }*/
  // using forEach inline callback function
  instructors.forEach(function(item) {
    if(!obj[item.course]) {
      obj[item.course] = [];
      obj[item.course].push(item.name);
    } else {
      obj[item.course].push(item.name);
    }
  }) 
  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
