function compute(action, x,y){
    if (action=="mul"){
    
        return x*y
    }
    else if (action=="sub"){
        return x-y
    }
    }
    console.log(compute("mul", 10,5))
    console.log(compute("sub", 10,5))