const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let selectedRecipe = "";
  for(let i = 0; i < recipes.length; i++) {
    if((bakeryA.includes(recipes[i]["ingredients"][0]) && bakeryB.includes(recipes[i]["ingredients"][1])) || (bakeryB.includes(recipes[i]["ingredients"][0]) && bakeryA.includes(recipes[i]["ingredients"][1]))) {
      selectedRecipe += recipes[i]["name"]+"\n";
    } 
  }
  return selectedRecipe;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese', 'cake base'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples', 'chocolate'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));