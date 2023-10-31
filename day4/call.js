


function sum(x,y){
    return x+y
}
function divide(x,y){
    return x/y
}
function compute(action, x,y){
    return action(x,y)
}
console.log(compute(sum,10,5))

