(arg, count=0) => {
  let money = +arg[0]
  for (const coin of [2, 1, .50, .20, .10, .05, .02, .01]) {
    count += ~~(money / coin)
    money = (money % coin).toFixed(2) 
  }
  return count
}

//-----------------------------------------------------------------(2)--------------------------

function coins(arg) {
  let [money, counter] = [+arg[0], 0]
  const coins  = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

  for (const el of coins) {
    counter += ~~(money / el)
    money = (money % el).toFixed(2)
  }
  return counter
}

//console.log(coins(['2.73']))
// console.log(coins(['0.03']))

