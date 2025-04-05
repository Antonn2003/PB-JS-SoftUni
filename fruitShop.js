function fruitShop(strawberryPrice, bananasQuantityInKg, orangesQuantityInKg, raspberriesQUantityInKg, strawberriesQuantityInKg){

    let strawberryExpenses = strawberryPrice * strawberriesQuantityInKg;
    let raspberriesPrice = strawberryPrice / 2;
    let raspberriesExpenses = raspberriesPrice * raspberriesQUantityInKg;
    let orangesPrice = raspberriesPrice * 0.60;
    let orangesExpenses = orangesPrice * orangesQuantityInKg;
    let bananasPrice = raspberriesPrice * 0.20;
    let bananasExpenses = bananasPrice * bananasQuantityInKg;

    let totalMoney = strawberryExpenses + raspberriesExpenses + orangesExpenses + bananasExpenses;

    console.log(totalMoney.toFixed(2));



}
fruitShop(48,10, 3.3,6.5,1.7)

