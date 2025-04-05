function sequence2kPlus1(data){
    let n = Number(data);
    let k = 1;

    while(k <= n){
        console.log(k);
        k = 2 * k + 1;
    }

}
sequence2kPlus1(31)