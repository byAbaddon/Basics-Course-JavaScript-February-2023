([s, t, p]) => +s + (t * (s * p / (12 * 100)))

//---------------------------------(2)--------------------------

function depositCalculator([sum, term, percent]) {
    let dividend = sum * percent / 100
    let month = dividend / 12
    return +sum + term * month
    
}

// console.log(depositCalculator([200, 3, 5.7]))

//--------------------------------------------------------(3)---------------------


function depositCalculator(arg) {
    let [sum, term, percent] = arg.map(el => Number(el) || el)
    let dividend = sum * percent / 100
    let month = dividend / 12
    return sum + term * month
}

// console.log(depositCalculator([200, 3, 5.7]))