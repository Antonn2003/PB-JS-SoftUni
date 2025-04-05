function moving(input){
    let spaceWidth = input[0];
    let spaceLength = input[1];
    let spaceHeight = input[2];

    let space = spaceWidth * spaceLength * spaceHeight;

    let index = 3;
    let command = input[index];
    let spaceTaken = 0;

    while(command !== "Done"){
        let boxes = Number(command);
        spaceTaken += boxes;

        if(spaceTaken > space){
            let spaceNeeded = spaceTaken - space;
            console.log(`No more space.You need ${spaceNeeded} c3 meters more`);

            return;
        }
        index++;
        command = input[index];


    }

    let spaceLeft = space - spaceTaken;
    console.log(`${spaceLeft} c3 meters left`);


}
moving(["10",

    "1",
    
    "2",
    
    "4",
    
    "6",
    
    "Done"])