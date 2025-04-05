function salary(input){
let tabsOpened = Number(input[0]);
let salary = Number(input[1]);

let n = input.length - 1;

for(let i = 2; i <= n; i++){
    let currentTab = input[i];

    switch (currentTab){
        case "Facebook":
            salary -= 150;
            break;
        case 'Instagram':
            salary -= 100;
            break;
        case 'Reddit':
            salary -= 50;
            break;
    }

    if (salary <= 0){
        console.log("You have lost your salary!")
        return;
    }
}

console.log(`'Your salary after cuts is ${salary}'`)


}
salary([10,

    750,
    
    "Facebook",
    
    "Dev.bg",
    
    "Instagram",
    
    "Facebook",
    
    "Reddit",
    
    "Facebook",
    
    "Facebook"])