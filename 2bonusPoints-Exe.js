function bonusPoints(number){
    let a = Number(number)
    let points = 0
    if(a <= 100){
        points += 5;
    }
    else if(100 < a <= 1000){
        points += 0.2 * a;
    }
    else{
        a > 1000
        points += 0.1 * a
    }

    if(a % 2 == 0){
        points += 1;
    }
    else if(a % 10 == 5){
        points += 2;
    }
    console.log(points);
    console.log(a + points)
}
bonusPoints(175)