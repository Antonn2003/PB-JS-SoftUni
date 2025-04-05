function cleverLilly(age, washingMachinePrice, toyPrice){

   let birthdayMoney = 10;
   let toysCount = 0;
   let moneySaved = 0;

   for (let i = 1; i <= age; i++){
    if(i % 2 == 0){
        moneySaved = birthdayMoney - 1;
        birthdayMoney += 10;
    }
    else{
        toysCount++;
    }
   }

   let ToysMoney = toysCount * toyPrice;
   let TotalMoney = ToysMoney + moneySaved;

   let diff = Math.abs(washingMachinePrice - TotalMoney);

   if(TotalMoney >= washingMachinePrice){
    console.log(`Yes ${diff.toFixed(2)}`);
   }
   else(
    console.log(`No ${diff.toFixed(2)}`)
   )

}
cleverLilly(10, 170, 6)