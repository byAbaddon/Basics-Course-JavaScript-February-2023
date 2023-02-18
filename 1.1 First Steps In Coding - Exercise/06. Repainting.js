([n, p, d, h]) => {
  n = (+n + 2) * 1.5; p = (p * 1.1) * 14.5; d *= 5.0
  total = +n + +p + +d + 0.4; masers = total * 0.30 * h 
  return (total + masers).toFixed(2)
}

//---------------------------------(2)--------------------------

function repainting(arg) {
  let [nylon, paint, diluent, hours] = arg.map(Number)
  nylon = (nylon + 2) * 1.5
  paint = (paint * 1.1) * 14.5
  diluent *= 5.0

  let totalMaterials = nylon + paint + diluent + 0.4
  let masersPrice = totalMaterials * 0.30 * hours

  return (totalMaterials + masersPrice).toFixed(2)
}

// console.log(repainting([10, 11, 4, 8]))


