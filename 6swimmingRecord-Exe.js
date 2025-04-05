function swimmingRecord(recordInSeconds, distanceInMeters, needenTimeToSwim1meterInSeconds){
    let hasToSwim = distanceInMeters * needenTimeToSwim1meterInSeconds;
    let addedTime = (recordInSeconds / 15) * 12.5;
    let totalTime = hasToSwim + addedTime;

    let abs = Math.abs(totalTime - recordInSeconds);

    if(totalTime >= recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${abs.toFixed(2)} seconds.`)
    }
    else{
        console.log(`No, he failed! He was ${abs.toFixed(2)} seconds slower.`)
    }

}
swimmingRecord(10464, 1500, 20)