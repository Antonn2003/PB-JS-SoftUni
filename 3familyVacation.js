function familyVacation(budget, daysCounter, pricePerDay, additionalExpenses){

    let additionalExpensesMoney = additionalExpenses / budget * 100;
    let neededMoney = pricePerDay * daysCounter;
    neededMoney += additionalExpensesMoney;

    if(daysCounter > 7){
        neededMoney -= neededMoney * 0.05;
    }

    diff = Math.abs(budget - neededMoney)
    
    if(budget > neededMoney ){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    }
    else{
        console.log(`${diff.toFixed(2)} leva needed.`);
    }

}
familyVacation(500,7,66,15)

