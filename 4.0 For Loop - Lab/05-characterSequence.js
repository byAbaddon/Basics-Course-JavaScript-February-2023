([t]) => t.split('').forEach(x => console.log(x))

//----------------------------------------(2)--------------------------------

function characterSequence([text]) {
  //text.match(/(\w|\W|\s{1})/gim).forEach(el => {console.log(el)})
  text.split('').forEach(el => console.log(el))
}

// characterSequence(['ice cream'])
