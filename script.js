function displayNum(num){
    result.value+=num
}
function clearBox(){
    result.value=""
}
function evaluateExp(){
    // let expr=result.value;
    // let res=eval(expr)
    // result.value=res
    result.value=eval(result.value)
}
function remove(){
    let curentValue=result.value;
    result.value=curentValue.slice(0,-1)

}

