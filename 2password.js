function password(input){
let index = 0;

let username = input[index];
index++;

let userPass = input[index];
index++;

while(true){
    let currentPass = input[index];
    index++;

    if(userPass == currentPass){
        console.log(`Welcome ${username}`)
        break;
    }
    else{
        console.log("Wrong password!")
    }
}
}
password(["Nakov",

    "1234",
    
    "Pass",
    
    "1324",
    
    "1234"])