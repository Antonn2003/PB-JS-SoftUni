function histogram(input){

    let n = input[0];

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 1; i <= n; i++){
        let currentNumber = input[i];

        if (currentNumber < 200){
            p1Counter++;
        }
        else if(currentNumber < 400){
            p2Counter++;
        }
        else if(currentNumber < 600){
            p3Counter++;
        }
        else if(currentNumber < 800){
            p4Counter++;
        }
        else{
            p5Counter++;
        }
    }

        let p1Percent = p1Counter / n *100;
        let p2Percent = p2Counter / n *100;
        let p3Percent = p3Counter / n *100;
        let p4Percent = p4Counter / n *100;
        let p5Percent = p5Counter / n *100;

        console.log(`${p1Percent.toFixed(2)}`)
        console.log(`${p2Percent.toFixed(2)}`)
        console.log(`${p3Percent.toFixed(2)}`)
        console.log(`${p4Percent.toFixed(2)}`)
        console.log(`${p5Percent.toFixed(2)}`)
    
}
histogram([3, 1, 2, 999])