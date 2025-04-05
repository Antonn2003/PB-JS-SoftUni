function arearOfFigures(arg1, arg2, arg3){
    let type = arg1;
    if(type == "square"){
        let a = Number(arg2)
        let area = a*a;
        console.log(area.toFixed(3))
    }
    else if(type == "rectangle"){
        let a = Number(arg2)
        let b = Number(arg3)
        let area = a * b;
        console.log(area.toFixed(3))
    }
    else if(type == "circle"){
        let a = Number(arg2)
        let area = Math.PI * (a * a);
        console.log(area.toFixed(3))
    }
    else{
        type == "triangle"
        let a = Number(arg2)
        let b = Number(arg3)
        let area = (a * b) / 2;
        console.log(area.toFixed(3))
    }

}
arearOfFigures("circle",
     6
    )