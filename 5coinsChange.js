function coinsChange(input){
    let changeStotinki = Math.round(input * 100);
    let coinsUsed = 0;

    while(changeStotinki > 0){
        coinsUsed++;

        if(changeStotinki >= 200){
            changeStotinki -= 200;
        }
        else if(changeStotinki >= 100){
            changeStotinki -= 100;
        }
        else if(changeStotinki >= 50){
            changeStotinki -= 50;
        }
        else if(changeStotinki >= 20){
            changeStotinki -= 20;
        }
        else if(changeStotinki >= 10){
            changeStotinki -= 10;
        }
        else if(changeStotinki >= 5){
            changeStotinki -= 5;}
        else if(changeStotinki >= 2){
            changeStotinki -= 2;}
        else if(changeStotinki >= 1){
            changeStotinki -= 1;}
    }
    console.log(coinsUsed);
}
coinsChange(0.56)