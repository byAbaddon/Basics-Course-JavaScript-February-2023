(arg) => {
    time = new Date(2023, 1, 1, 0, eval(arg.map(Number).join("+")))
    return time.toString().split(' ')[4].slice(1,5)
}

//-----------------------------------------------------------------(2)--------------------------

function sumSeconds(arg) {
    let min = arg.reduce((a, b) => +a + +b)
    let time = new Date(2020, 11, 31, 0, min)
    return time.toString().split(' ')[4].substring(1,5)
}

// // console.log(sumSeconds(['35', '45', '44']))


