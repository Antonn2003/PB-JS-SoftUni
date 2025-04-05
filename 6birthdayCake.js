function birthdayCake(input){
    let lengthCake = input[0];
    let widthCake = input[1];
    let piecesCake = lengthCake * widthCake;

    index = 2;
    command = input[index];
    let cakesTaken = 0;



    while(command !== 'STOP'){
        let currentTake  = Number(command);

        cakesTaken += currentTake;

        
        if(cakesTaken > piecesCake){
            let neededPieces = cakesTaken - piecesCake
            console.log(`"No more cake left! You need ${neededPieces} pieces more.`)

            return;
        }

    index++
    command = input[index];




    }
    let leftPieces = piecesCake - cakesTaken;
    console.log(`${leftPieces} pieces are left.`);
}
birthdayCake(["10",

    "10",
    
    "20",
    
    "20",
    
    "20",
    
    "20",
    
    "21"])