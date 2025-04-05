function combinations(arg1){
    let counter = 0;
    for(let x = 0; x <= arg1; x++){
        for(let y = 0; y <= arg1; y++){
            for(let z = 0; z <= arg1; z++){
                if(x + y + z == arg1){
                    counter++;
                }
            }
        }
    }
    console.log(counter)

}
combinations(5)