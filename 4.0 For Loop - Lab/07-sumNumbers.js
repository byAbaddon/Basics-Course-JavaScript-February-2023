([arg]) => 'The sum of the digits is:' + eval(arg.split('').join("+"))

//----------------------------------------(2)--------------------------------

// ([arg]) => 'The sum of the digits is:' + arg.split('').reduce((a, b) => +a + +b)

//------------------------------------------------------------(3)------------------------------
function sumNumbers([arg]) {
  return 'The sum of the digits is:' + arg.split('').reduce((a, b) => +a + +b)
}

// console.log(sumNumbers(['1234']))



//------------------------------------------------------------(4)------------------------------
function sumOfNumbers([arg]) {
  
  let sum = 0
  for (let i = 0; i < arg.length; i++) {
    sum += +arg[i]
  }

  console.log(`The sum of the digits is:${sum}`);
}

//sumOfNumbers(['1234'])
