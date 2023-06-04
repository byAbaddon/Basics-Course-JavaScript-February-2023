t => {
  s = +t * 0.60; o = s * 0.80; b = o / 4; a = b / 5
  return +t + s + o + b + a
}

//---------------------------------(2)--------------------------

function basketballEquipment(tax) {
  let sneakers = +tax * 0.60
  let outfit = sneakers * 0.80
  let ball = outfit / 4
  let accessories = ball / 5
  return `${(+tax + sneakers + outfit + ball + accessories).toFixed(2)}`
}

//console.log(basketballEquipment(320))
