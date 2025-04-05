function godzillaVsKong(filmBudget, statistsNumber, clothesPrisePerStatist){
 let decorPrice = 0.1 * filmBudget;
 let clothesTotal = statistsNumber * clothesPrisePerStatist

 if (statistsNumber > 150){
    clothesTotal -= 0.1 * clothesTotal;

 }
 finalPrice = clothesTotal + decorPrice

 let abs = Math.abs(filmBudget - finalPrice);

 if(filmBudget >= finalPrice ){
    console.log("Action!")
    console.log(`Wingard starts filming with ${abs.toFixed(2)} leva left.`)
 }
 else{
    console.log("Not enough money!")
    console.log(`Wingard needs ${abs.toFixed(2)} leva more.`)

 }

}
godzillaVsKong(9587.88,

    222,
    
    55.68)