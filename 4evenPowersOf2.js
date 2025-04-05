function evenPowersOf2(arg2){

    let n = Number(arg2);
    for(let i = 0; i <= n; i += 2){
        let result = Math.pow(2, i);
        console.log(result);
    }

}
evenPowersOf2(7)