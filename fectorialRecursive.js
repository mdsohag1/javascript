
// !5 = 1*2*3*4*5
// !6 = !5*6
// !7 = !6*7
// !8 = !7*8


function fectorialRecursive (n){
    if(n == 0){
        return 1;
    }else{
        return n * fectorialRecursive(n-1)
    }
}
var result = fectorialRecursive(5)
console.log(result)
var result1 = fectorialRecursive(10)
console.log(result1)
var result2 = fectorialRecursive(8)
console.log(result2)