
function toyShop(excursionPrice, numberOfPuzzles, numberOfDolls, numberOfTeddyBears, numberMignons, numberTrucks){
let puzzlePrice = numberOfPuzzles * 2.60;
let dollsPrice = numberOfDolls * 3;
let teddyBearsPrice = numberOfTeddyBears * 4.10;
let mignonsPrice = numberMignons * 8.20;
let trucksPrice = numberTrucks * 2;

let totalPrice = puzzlePrice + dollsPrice + teddyBearsPrice + mignonsPrice + trucksPrice

if(numberOfPuzzles + numberOfDolls + numberOfTeddyBears + numberMignons + numberTrucks >= 50 ){
    totalPrice -= totalPrice * 0.25;

}
totalPrice -= totalPrice * 0.1;
let abs =Math.abs(totalPrice - excursionPrice) 


if(totalPrice >= excursionPrice){
    console.log(`Yes! ${abs.toFixed(2)} lv left.`)
}
else{
    console.log(`Not enough money! ${abs.toFixed(2)} lv needed.`)
}


}
toyShop(320, 8, 2, 5, 5, 1)


