function magicNumber(arg1, arg2, arg3){
    let start = Number(arg1);
    let end = Number(arg2);
    let magicNumber = Number(arg3);
    let isFound = false;
    let counter = 0;

    for(let x = start; x <= end; x++){
        for(let y = start; y <= end; y++){
            let sum = x + y;
            counter++;

            if(sum == magicNumber){
                console.log(`Number of checks: ${counter} : ${x} + ${y} = ${magicNumber}`);
                isFound = true;
                break;
                
            }
        }
        if(isFound == true){
            break;
           }
    }
    if(isFound == false){
        console.log(`Magic number isnt found.Number of checks - ${counter}`);
    }
}
magicNumber(1,

    10,
    
    5)