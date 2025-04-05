function sumPrimeNonPrime(input){
    let index = 0;
    let command = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;

    while(command !== 'stop'){
        let number = Number(command);

        if(number < 0){
            console.log(`Number is negative`);

            index++;
            command = input[index];
            continue;	
        }

        let isPrime = true;

        for(let divider = 2;divider < number; divider++){
            if(number % divider == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            primeSum += number;
        }
        else{
            nonPrimeSum += number;
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}
sumPrimeNonPrime(["0", "-9", "0", "stop"])