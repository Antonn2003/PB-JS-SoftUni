function specialNumbers(number){
    let result = "";
    for(let currentNum = 1111; currentNum <= 9999; currentNum++){
        let currentNumStr = String(currentNum);
        let isSpecial = true;

        for(let i = 0; i < currentNumStr.length; i++){
            let digit = Number(currentNumStr[i]);

            if(number % digit !== 0){
                isSpecial = false;
                break;
            }
        }

        if(isSpecial){
            result += currentNum + " ";

        }
    }

    console.log(result)
}
specialNumbers(3)
