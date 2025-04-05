function equalSums(num1, num2){
    let result = '';

    for(let currentNumber= num1; currentNumber <= num2; currentNumber++){
        let currentNumberStr = String(currentNumber);

        let evenPositionSum = 0;
        let oddPositionSum = 0;

        for(let i = 0; i < currentNumberStr.length; i++){
            let digit = Number(currentNumberStr[i]);

            if(i % 2 == 0){
                evenPositionSum += digit;
            }
            else{
                oddPositionSum += digit;
            }
        }

        if(evenPositionSum == oddPositionSum){
            result += currentNumber + ' ';
        }
    }

    console.log(result);
}
equalSums(100000, 100050)