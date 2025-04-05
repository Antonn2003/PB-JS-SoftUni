function excursionMoney(input) {
    let neededMoneyForExcursion = Number(input[0]);
    let availableMoney = Number(input[1]);
  
    let daysSpendingMoney = 0;
    let overallDays = 0;
  
    let index = 2;
  
    while (availableMoney < neededMoneyForExcursion && daysSpendingMoney < 5) {
      let action = input[index];
      index++;
      let money = Number(input[index]);
      index++;
      overallDays++;
  
      if (action === "spend") {
        availableMoney -= money;
        if (availableMoney < 0) {
          availableMoney = 0;
        }
        daysSpendingMoney++;
      } else if (action === "save") {
        availableMoney += money;
        daysSpendingMoney = 0; // зануляваме, защото не сме харчили
      }
    }
  
    if (daysSpendingMoney === 5) {
      console.log(`You can't save the money.`);
      console.log(overallDays);
    } else {
      console.log(`You saved the money for ${overallDays} days.`);
    }
  }
  excursionMoney(["110",

    "60",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10"])
  