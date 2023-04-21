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
