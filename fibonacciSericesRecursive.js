
function fibonacci(n){
    if(n==0){
        return [0]
    }
    if(n==1){
        return [0,1]
    }
    else{
        var fibo = fibonacci(n-1)
        var element = fibo[n-1] + fibo[n-2]
        fibo.push(element)
        return fibo;
    }
}

var result = fibonacci(10)
console.log(result)
var result2 = fibonacci(8)
console.log(result2)
var result3 = fibonacci(50)
console.log(result3)