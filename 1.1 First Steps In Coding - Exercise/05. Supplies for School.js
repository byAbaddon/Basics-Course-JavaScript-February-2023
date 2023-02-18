([p, m, d, c]) => ((p * 5.8 + m * 7.2 + d * 1.2) * (100 - c) / 100).toFixed(3)

//---------------------------------(2)--------------------------

function suppliesForSchool([pens, markers, drugs, discount]) {
  pens *= 5.80
  markers *= 7.20
  drugs *= 1.20
  let total = (pens + markers + drugs) * (100 - discount) / 100
  return total.toFixed(3)
}

// console.log(suppliesForSchool([2, 3, 4, 25]))

