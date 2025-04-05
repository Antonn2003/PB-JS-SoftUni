function travelDestination(input){

    let index = 0;
    let command = input[index];
    index++;

    while(command !== "End"){
        let destination = command;
        let budget = Number(input[index]);
        index++
        let sum = 0;

        while(budget > sum){
            let currentSavedMoney = (input[index]);
            index++;
            sum += currentSavedMoney;
        }
        console.log(`Going to ${destination}`);
        command = input[index];
        index++;
    }


}
travelDestination(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])