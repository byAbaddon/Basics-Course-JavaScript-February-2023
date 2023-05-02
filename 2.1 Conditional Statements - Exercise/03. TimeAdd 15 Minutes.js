function addMinToTime([hour, min]) {
    let time = new Date(2020, 12, 8, +hour, +min + 15)
    let [start, end] = [0, 5]
    time.getHours() < 10 ? ++start && --end: null 
    return time.toString().split(' ')[4].substr(start, end)
}

//console.log(addMinToTime(['0', '01']))
// console.log(addMinToTime(['23', '59']))


//-----------------------------------------------------------(2)-------------------------------
function timeMinutes([hours, minutes]) {
    let addTime = hours * 60 + Number(minutes) + 15
    let totalHour = parseInt(addTime / 60)
    let totalMin = addTime % 60
 
    if (totalHour >= 24) totalHour -= 24 
    console.log(`${totalHour}:${totalMin < 10 ? 0 : ''}${totalMin}`)

}
// timeMinutes(['23', '59'])

//-----------------------------------------------------------(3)-------------------------------

function timeMinutes(input) {
    let hours = Number(input[0])
    let minutes = Number(input[1]) + 15
    
    if (minutes > 59) { 
        minutes -= 60
        hours += 1
    }
    
    if (hours >= 24) hours -= 24
    if (minutes < 10) minutes = '0' + minutes
    
    console.log(`${hours}:${minutes}`);
}


// timeMinutes(['23', '59'])
