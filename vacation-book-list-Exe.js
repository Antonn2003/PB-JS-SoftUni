function vacationBookList(numberOfPages, ReadPagesFor1Hour, neededDays){
    let hoursForBookReading = numberOfPages / ReadPagesFor1Hour;
    let neededHoursPerDay = hoursForBookReading / neededDays;

    console.log(neededHoursPerDay);

}
vacationBookList(212, 20, 2);
vacationBookList(432, 15, 4);