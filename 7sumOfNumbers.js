function sumOfNumber(arg3){
 let numAsString = String(arg3);
 let sum = 0;

 for(let i = 0; i < numAsString.length; i++){
    let ch = numAsString.charAt(i);
    let num = Number(ch);
    sum += num;
 }
 console.log(sum)


}
sumOfNumber("1234")