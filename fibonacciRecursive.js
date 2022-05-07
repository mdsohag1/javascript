function fibonacciRecursive (num){
    var fibo = [0,1]
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    else{
        return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
    }
}
var result = fibonacciRecursive(10)
console.log(result)

var result2 = fibonacciRecursive(30)
console.log(result2)

var result3 = fibonacciRecursive(2)
console.log(result3)
