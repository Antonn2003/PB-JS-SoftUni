function walking(input){

    let index = 0;
    let command = input[index];
    let totalSteps = 0;
    while(command !== 'Going home'){
        let currentSteps = Number(command);

        totalSteps += currentSteps;

        if(totalSteps >= 10000){
            let stepsOver = totalSteps - 10000;

            console.log("Goal reached!Good job!");
            console.log(`You have walked ${stepsOver} steps more`);
            return;
        }
        index++;
        command = input[index];
    }
    index++
    let additionalSteps = Number(input[index]);
    totalSteps += additionalSteps;

    let diff = Math.abs(totalSteps - 10000);

    if(totalSteps >= 10000){
        console.log("Goal reached");
        console.log(`You have walked ${diff} steps more`);
    }
    else{
        console.log(`${diff} steps more to reach goal`)
    }

}
walking(["1500",

    "3000",
    
    "250",
    
    "1548",
    
    "2000",
    
    "Going home",
    
    "2000"])