([h, d]) => +h >= 10 && +h <= 18 && d !== 'Sunday' ? 'open' : 'closed'

//---------------------------------(2)--------------------------

function workingHours([hours, day]) {
  return +hours >= 10 && +hours <= 18 && day !== 'Sunday' ? 'open' : 'closed'
}

// console.log(workingHours(['11', 'Monday']))
// console.log(workingHours(['11', 'Sunday']))

//---------------------------------------------------(3)------------------------------------

function workingHours([hours, day]) {
  return +hours < 10 || +hours > 18 || day == 'Sunday' ?'closed' : 'open' 
}

// console.log(workingHours(['11', 'Monday']))
// console.log(workingHours(['11', 'Sunday']))