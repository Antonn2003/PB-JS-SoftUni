function trackingMania(input){

    let groupsCount = Number(input[0]);

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kalimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;
    let totalPeople = 0

    let n = input.length - 1;

    for(let i = 1; i <= n; i++){
        let currentGroup = Number(input[i]);
        totalPeople += currentGroup;

        if (currentGroup <= 5){
            musalaGroup += currentGroup;
        }
        else if(currentGroup <= 12){
            monblanGroup += currentGroup;
        }
        else if(currentGroup<= 25){
            kalimanjaroGroup += currentGroup;
        }
        else if(currentGroup <= 40){
            k2Group += currentGroup;
        }
        else{
            everestGroup += currentGroup;
        }
    }

    let percentMusala = musalaGroup / totalPeople * 100;
    let percentmonblan = monblanGroup / totalPeople * 100;
    let percentkalimanjaro = kalimanjaroGroup / totalPeople * 100;
    let percentk2 = k2Group / totalPeople * 100;
    let percenteverest = everestGroup / totalPeople * 100;

    console.log(percentMusala.toFixed(2));
    console.log(percentmonblan.toFixed(2));
    console.log(percentkalimanjaro.toFixed(2));
   console.log(percentk2.toFixed(2));
   console.log(percenteverest.toFixed(2));
}
trackingMania(["5","25","41","31","250","6"])