const talkingCalendar = function(date) {
  // Your code here
  let dataArray = date.split('/');
  console.log(dataArray);
  let month = "";
  switch(dataArray[1]) {
    case '01':
      month = "Janunary";
      break;
    case '02':
      month = "February";
      break;
    case '03':
      month = "March";
      break; 
    case '04':
      month = "April";
      break;
    case '05':
      month = "May";
      break;
    case '06':
      month = "June";
      break;
    case '07':
      month = "July";
      break;
    case '08':
      month = "August";
      break;
    case '09':
      month = "September";
      break;
    case '10':
      month = "October";
      break;
    case '11':
      month = "November";
      break;
    case '12':
      month = "December";
      break;  
  }
  let day = "";
  if(dataArray[2] === '01' || dataArray[2] === '21' || dataArray[2] === '31') {
    day = dataArray[2] + "st";
  } else if(dataArray[2] === '02' || dataArray[2] === '22') {
    day = dataArray[2] + "nd";
  } else if(dataArray[2] === '03' || dataArray[2] === '23') {
    day = dataArray[2] + "rd";
  } else {
    day = dataArray[2] + "th";
  }  
  return month + " " + day.replace(0, "") + ", " + dataArray[0];
};

//talkingCalendar("2017/12/02");
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/01/03"));
console.log(talkingCalendar("1987/03/01"));
console.log(talkingCalendar("1987/03/31"));