function easterEggsBattle(input){
    let index = 0;
    let playerOne = input[index];
    index++;
    let playerTwo = input[index];
    index++;

    let command = input[index];
    index++;

    let isOutEggs = false;

    while(command !== 'End'){
        switch(command){
            case 'one':
                playerTwo--;
                break;
            case 'two':
                playerOne--;
                break;
        }

        if(playerOne == 0){
            isOutEggs = true;
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            break;
        }
        else if(playerTwo == 0){
            isOutEggs = true;
            console.log(`Player two is out of eggs. Player two has ${playerOne} eggs left.`);
            break;
        }

        command = input[index];
        index++;
    }
    if(isOutEggs == false){
        console.log(`Player one has ${playerOne} eggs left.`);
        console.log(`Player two has ${playerTwo} eggs left.`);
    }
}
easterEggsBattle([5,4,'one','two','one','two','two','End'])