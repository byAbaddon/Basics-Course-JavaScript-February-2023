([c,f,v]) => {
  c *= 10.35; f *= 12.40; v *= 8.15; d = 1.20; del = 2.50
  return `Total: ${(((c + f + v) * d) + del).toFixed(2)}`
}

//---------------------------------(2)--------------------------

function foodDelivery([chicken_numbers, fish_numbers, vegetable_numbers]) {
  chicken_numbers *= 10.35
  fish_numbers *= 12.40
  vegetable_numbers *= 8.15
  let dessert = 1.20
  let delivery = 2.50

  let subtotal = chicken_numbers + fish_numbers + vegetable_numbers
  let total = subtotal * dessert + delivery

  return `Total: ${total.toFixed(2)}`
}

// console.log(foodDelivery([2, 4, 3]))
