function cinemaTickets(arg) {
  let [student, standard, kid] = [0, 0, 0]
  let movie = arg.shift()

  while (movie != 'Finish') {
    seats = arg.shift()
    tickets = 0

    for (let i = 0; i < seats; i++) {
      chairs = arg.shift()
      if (chairs == 'End') break;

      chairs === 'student' ? student++ : null
      chairs === 'standard' ? standard++ : null
      chairs == 'kid' ? kid++ : null
      tickets++
    }
    console.log(`${movie} - ${(tickets / seats * 100).toFixed(2)}% full.`)
    movie = arg.shift()
  }

  totalTickets = student + standard + kid
  console.log('Total tickets:', totalTickets)
  console.log((student / totalTickets * 100).toFixed(2) + '%', 'student tickets.')
  console.log((standard / totalTickets * 100).toFixed(2) + '%', 'standard tickets.')
  console.log((kid / totalTickets * 100).toFixed(2) + '%', 'kids tickets.')
}

// ----------------------------------------------------(2)-----------------------------------------------------

function cinemaTickets(input) {
    let student = standard = kid = 0
 
    while (true) { // infinity loop
        let movie = input.shift() // get movie
        if (movie == 'Finish') break // break while infinity loop if command  == Finish             
 
        let seats = input.shift() // get seats
        let tickets = 0 // current tickets
 
        for (let i = 0; i < seats; i++) { // loop for seats number
            let chairs = input.shift() // get current type of ticket
            if (chairs == 'End') break // if End break loop and begin again   
            // increase type ot chairs
            if (chairs == 'student') student++
            if (chairs == 'standard') standard++
            if (chairs == 'kid') kid++
            tickets++
        }
        console.log(`${movie} - ${(tickets / seats * 100).toFixed(2)}% full.`)
    }
    // print total results
    const totalTickets = student + standard + kid
    console.log('Total tickets:', totalTickets)
    console.log((student / totalTickets * 100).toFixed(2) + '%', 'student tickets.')
    console.log((standard / totalTickets * 100).toFixed(2) + '%', 'standard tickets.')
    console.log((kid / totalTickets * 100).toFixed(2) + '%', 'kids tickets.')
}



// cinemaTickets([
//   'The Matrix',
//   '20',
//   'student',
//   'standard',
//   'kid',
//   'kid',
//   'student',
//   'student',
//   'standard',
//   'student',
//   'End',
//   'The Green Mile',
//   '17',
//   'student',
//   'standard',
//   'standard',
//   'student',
//   'standard',
//   'student',
//   'End',
//   'Amadeus',
//   '3',
//   'standard',
//   'standard',
//   'standard',
//   'Finish',
// ])
