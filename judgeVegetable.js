const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 14,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 18,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 15,
    plumpness: 3
  }
]


const metric = 'redness'

const judgeVegetable = function(vegetables, metric) {
  let higherScore = 0;
  let higherScoreIndex = 0;
  for(let i = 0; i < vegetables.length; i++) {
    if(vegetables[i][metric] > higherScore) {
      higherScoreIndex = i;
      higherScore = vegetables[i][metric]; 	
    } 
  }
  console.log(vegetables[higherScoreIndex].submitter);
}

judgeVegetable(vegetables, metric)