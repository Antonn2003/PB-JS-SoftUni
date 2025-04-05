function buildingFloors(arg1, arg2){
    flo = Number(arg1);
    ro = Number(arg2);

    for(let floor = flo; floor >= 1; floor--){
        let buff = "";
        for(let room = 0; room < ro; room++){
            if(floor == flo){
                buff += `L${floor}${room} `;
            }
            else if(floor % 2 == 0){
                buff += `O${floor}${room} `;
            }
            else{
                buff += `A${floor}${room} `;
            }
        }
        console.log(buff);
    }

}
buildingFloors(6, 4)