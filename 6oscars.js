function oscars(input){

    let actor = input[0];
    let points = Number(input[1]);
    let judges = Number(input[2]);

    let n = input.length - 1;

    for(let i = 3; i <= n; i += 2){
        let judge = input[i];
        let judgePoints = Number(input[i + 1]);

        points += (judge.length * judgePoints) / 2;

        if(points >= 1250.5){
            break;
        }
    }

    if (points >= 1250.5){
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points}`)
    }
    else{
       let  pointsNeeded = 1250.5 - points;
        console.log(`"Sorry, ${actor} you need ${pointsNeeded} more`)
    }


}
oscars(["Zahari Baharov",

    "205",
    
    4,
    
    "Johnny Depp",
    
    "45",
    
    "Will Smith",
    
    "29",
    
    "Jet Lee",
    
    "10",
    
    "Matthew Mcconaughey",
    
    "39"])