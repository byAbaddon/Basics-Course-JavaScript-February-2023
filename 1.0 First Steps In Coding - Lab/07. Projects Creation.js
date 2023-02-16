([n,p]) => `The architect ${n} will need ${p * 3} hours to complete ${p} project/s.`

//---------------------------------(2)-----------------------

function project([name, proj]) {
    return `The architect ${name} will need ${proj * 3} hours to complete ${proj} project/s.`
}

// console.log(project(['George', 4]))