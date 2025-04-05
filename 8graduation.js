function graduation(input){
let index = 0;

let name = input[index];
index++;

let sumGrade = 0;
let i = 1;   //broqch zatova koy klas e
let badGradecounter = 0;
let isExcluded = false;

while(i <= 12){
    let grade = Number(input[index]);
    index++;

    if(grade < 4.00){
        badGradecounter++;
        if(badGradecounter == 2){
            isExcluded = true;
            console.log(`The student ${name} has been exluded at ${i} grade`);
            break;
        }
        continue;
    }

    sumGrade += grade;
    i++;
}
let percent = sumGrade / 12;

if(!isExcluded){
    console.log(percent.toFixed(2));
}

}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])