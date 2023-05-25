function cleverLily( [age, laundryPrice, toyPrice], toysCount = 0, birthdaysMoney = 0) { 
    for (i = 1; i <= age; i++) i & 1 ? toysCount++ : (birthdaysMoney += 10 * i / 2, birthdaysMoney--)
    let money = birthdaysMoney + toyPrice * toysCount
    return money >= laundryPrice ? `Yes! ${(money - laundryPrice).toFixed(2)}` : `No! ${(laundryPrice - money).toFixed(2)}`
}

//-----------------------------------------------------(2)------------------------------------------------
function cleverLily(params) {
  let lilyAge = Number(params[0]);
  let laundryPrice = Number(params[1]);
  let priceForToy = Number(params[2]);

  let money = 0;
  let takenMoney = 0;
  let toyCount = 0;

  let evenBd = 0;
  for (let index = 1; index <= lilyAge; index++) {
    if (index % 2 === 0) {
      evenBd++;
      money += evenBd * 10;
      takenMoney++;
    } else {
      toyCount++;
    }
  }

  let moneyFromToys = toyCount * priceForToy;
  let allMoney = money + moneyFromToys - takenMoney;

  if (allMoney >= laundryPrice) {
    console.log(`Yes! ${(allMoney - laundryPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${Math.abs(allMoney - laundryPrice).toFixed(2)}`);
  }
}


// console.log(cleverLily([10, 170.00, 6]))
// console.log(cleverLily([21, 1570.98, 3]))
