function minNumber(input){
    index = 0;
    let arg = input[index];
    index++;

    minNum = Number.MAX_SAFE_INTEGER;

    while(arg !== "Stop"){
        let num = Number(arg);

        if(num < minNum){
            minNum = num;
        }

        arg = input[index];
        index++
    }
    console.log(minNum);
}
minNumber(["-1", "-2", "Stop"])