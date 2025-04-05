function trainTheTrainers(input){
    let judgesCount = Number(input[0]);

    let index = 1;
    let command = input[index];
    let gradesSum = 0;
    let presentationsCount = 0;

    while(command !== "Finish"){
        let presentation = command;
        let currentGradeSum = 0;

        for(let judge = 1; judge <= judgesCount; judge++){
            index++;
            let grade = Number(input[index]);

            currentGradeSum += grade;
        }

        let currentAverageGrade = currentGradeSum / judgesCount;
        gradesSum += currentAverageGrade;
        presentationsCount++;

        console.log(`${presentation} - ${currentAverageGrade.toFixed(2)}`);
        index++;
        command = input[index];


    }

    let averegeGradesSum = gradesSum / presentationsCount;
    console.log(`Students final grade is${averegeGradesSum.toFixed(2)}`)
}
trainTheTrainers(["2",

    "While-Loop",
    
    "6.00",
    
    "5.50",
    
    "For-Loop",
    
    "5.84",
    
    "5.66",
    
    "Finish"])