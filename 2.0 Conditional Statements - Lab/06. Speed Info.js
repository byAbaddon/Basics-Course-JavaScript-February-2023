(s) => s <= 10 ? 'slow' : s <= 50 ? 'average' : s <= 150 ? 'fast' : s <= 1000 ? 'ultra fast' : 'extremely fast'

//---------------------------------(2)--------------------------

function speedInfo(speed) {
  return speed <= 10  ? 'slow' : speed <= 50 ? 'average' : speed <= 150 ? 'fast' : speed <= 1000 ? 'ultra fast' : 'extremely fast'
}

// console.log(speedInfo(16));