function tennisRanklist(input){

    let tournamenCounter = Number(input[0]);
    let initialPoints = Number(input[1]);

    let seasonPoints = 0;
    let tournamentsWon = 0;

    let n = input.length - 1;

    for (let i = 2; i <= n; i++){
        let currentTournament = input[i];

        switch (currentTournament){
            case 'SF':
                seasonPoints += 720;
                break;
            case 'F':
                seasonPoints +=1200;
                break;
            case 'W':
                seasonPoints += 2000;
                tournamentsWon++;
                break;
        }

        
    }
    let finalPoints = initialPoints + seasonPoints;
    let averagePoints = seasonPoints / tournamenCounter;
    let winRate = tournamentsWon / tournamenCounter * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winRate.toFixed(2)}%`);




}
tennisRanklist(["4", "750", 'SF', "W", 'SF', 'W'])