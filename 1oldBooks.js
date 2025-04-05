function oldBooks(input){
let favouriteBook = input[0];

let index = 1;
let command = input[index];


let booksChecked = 0;

while(command !== "No more Books!"){
    let bookTitle = command;

    if(bookTitle == favouriteBook){
        console.log(`Ypu checked ${booksChecked} books and found it`)
        return;
    }
    booksChecked++;
    index++;
    command = input[index];

}
console.log(`The book you search is not here`)
console.log(`You checked ${booksChecked} books`)
}
oldBooks(["Troy","Stronger","Life Style","Troy"])