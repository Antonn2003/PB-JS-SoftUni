function foodForPets(input){
    let index = 0;
    let daysCounter = input[index];
    index++;

    let totalFood = input[index];
    index++;

    let totalBiscuits = 0;
    let totalEatenFood =  0;
    let totalEatenFoodByDog = 0;
    let totalEatenFoodByCat = 0;

    for(let day = 1; day <= daysCounter; day++){
        let dogFoodForDay = Number(input[index]);
        index++;

        let catFoodForDay = Number(input[index]);
        index++;

        let sumFood = dogFoodForDay + catFoodForDay;
        totalEatenFood += sumFood;
        totalEatenFoodByDog += dogFoodForDay;
        totalEatenFoodByCat += catFoodForDay;

        if(day % 3 == 0){
            let biscuits = sumFood * 0.10;
            totalBiscuits += biscuits;
        }
    }

    let totalEatenFoodInP = totalEatenFood / totalFood * 100;
    let totalEatenFoodByDogInP = totalEatenFoodByDog / totalEatenFood * 100;
    let totalEatenFoodByCatInP = totalEatenFoodByCat / totalEatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${totalEatenFoodInP.toFixed(2)} of the food has been eaten."`);
    console.log(`${totalEatenFoodByDogInP.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalEatenFoodByCatInP.toFixed(2)}% eaten from the cat."`);
}
foodForPets([3,1000,300,20,100,30,110,40])