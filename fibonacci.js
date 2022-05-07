
// 0,1,1,2,3,5,8,13,21   ager duita sonkhar jugfol porer sonkha

function fibonacci(num){
    var fibo = [0, 1]
    for(i=2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}

var result = fibonacci(10)
console.log(result)
var result2 = fibonacci(42)
console.log(result2)
var result3 = fibonacci(21)
console.log(result3)