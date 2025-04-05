function sumNumbers(input){
let index = 0;                              //Tuk prisvoqvame 0 na promenlivata index
let targetNumber = Number(input[index]);    //Tuk vzimame chisloto ot nuleviq element v masiva
index++;                                    //Inkrementirame i veche index e 1

sum = 0;

while(true){
let currentNum = Number(input[index]);   //proverqvame s chisloto ot purviq element v masiva
index++;                                 //Inkrementirame i veche index e 2, 3, 4.....

sum += currentNum;
if(sum >= targetNumber){
    break
}
}

console.log(sum)
}
sumNumbers(["100",

    "10",
    
    "20",
    
    "30",
    
    "40"])