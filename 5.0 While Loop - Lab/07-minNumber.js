arg => Math.min(...arg.slice(0, -1))

//---------------------------------------------------(2)----------------------

function minNumber(arg) {
  arg.pop()
  return Math.min(...arg)
}

// console.log(minNumber(["100", "99", "80", "70", "Stop"]))