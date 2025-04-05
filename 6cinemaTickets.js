function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    let studentTicketsCount = 0;
    let standartTicketsCount = 0;
    let kidTicketsCount = 0;

    while(command !== 'Finish'){
        let movieTitle = command;
        index++;

        let availableSeats = Number(input[index]);

        index++;
        let innerCommand = input[index];
        let seatsTaken = 0;

        while(innerCommand !== 'End'){
            let ticketType = innerCommand;
            seatsTaken++;

            switch(ticketType){
                case 'student':
                    studentTicketsCount++;
                    break;
                case 'standart':
                    standartTicketsCount++
                    break;
                case 'kid':
                    kidTicketsCount++;
                    break;
            }

            if(seatsTaken == availableSeats){
                break;
            }

            index++;
            innerCommand = input[index];
        }

        let seatsTakenPercent = seatsTaken / availableSeats * 100;

        console.log(`${movieTitle} - ${seatsTakenPercent.toFixed(2)} - full!`);

        index++;
        command = input[index];
    }

    let ticketsCount = studentTicketsCount + standartTicketsCount + kidTicketsCount;
    let percentStudentTickets = studentTicketsCount / ticketsCount * 100;
    let standartStudentTickets = standartTicketsCount / ticketsCount * 100;
    let kidStudentTickets = kidTicketsCount / ticketsCount * 100;

    console.log(`Total tickets ${ticketsCount}`);
    console.log(`${percentStudentTickets.toFixed(2)} - student tickets`);
    console.log(`${standartStudentTickets.toFixed(2)} - standart tickets`);
    console.log(`${kidStudentTickets.toFixed(2)} - kid tickets`)
}
cinemaTickets(["Taxi",

    "10",
    
    "standard",
    
    "kid",
    
    "student",
    
    "student",
    
    "standard",
    
    "standard",
    
    "End",
    
    "Scary Movie",
    
    "6",
    
    "student",
    
    "student",
    
    "student",
    
    "student",
    
    "student",
    
    "student",
    
    "Finish"])