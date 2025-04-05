function numbersDivisibleBy9(arg1, arg2){
let start = Number(arg1);
let end = Number(arg2);

let sum = 0;
let buff = "";

for(let i = start; i <= end; i++){
    if(i % 9 === 0){
        sum += i;
        buff += i + '\n';
    }
}
console.log(sum);
console.log(buff);


}
numbersDivisibleBy9(100, 200)