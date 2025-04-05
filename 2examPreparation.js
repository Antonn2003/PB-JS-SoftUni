function examPreparation(input){
    let poorGradesLimit = input[0];

    let index = 1;
    let command = input[index];
    let gradesSum = 0;
    let problemsSolved = 0;
    let lastProblemSolved = "";
    let poorGradesCounter = 0;

    while(command !== "Enough"){
        let problemName = command;
        index++
        let grade = Number(input[index]);

        gradesSum += grade;
        problemsSolved++;
        lastProblemSolved = problemName;

        if(grade <= 4){
            poorGradesCounter++;
            if(poorGradesCounter === poorGradesLimit){
                console.log("You need a brake!");

                return;
            }
        }

        index++;
        command = input[index];

    }

    let averageScore = gradesSum / problemsSolved;

    console.log(`average score is ${averageScore}`);
    console.log(`number of problems ${problemsSolved}`);
    console.log(`last problem - ${lastProblemSolved}`)

}
examPreparation(["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"])