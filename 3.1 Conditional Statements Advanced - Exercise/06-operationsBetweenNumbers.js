function operationsBetweenNumbers([x, y, ope]) {
  const sum = eval(x + ope + y)
  if (sum == Infinity || !sum) return `Cannot divide ${x} by zero`
  if (ope == "/") return `${x} ${ope} ${y} = ${sum.toFixed(2)}`
  if (ope == "%") return `${x} ${ope} ${y} = ${sum}`
  return `${x} ${ope} ${y} = ${sum} - ${sum & 1 ? 'odd' : 'even'}`
}

// console.log(operationsBetweenNumbers ([10, 12, '+']))
// console.log(operationsBetweenNumbers([10, 0, "%"]))
