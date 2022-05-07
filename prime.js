
// mowlikh sonkha ber kora

function primeNumber(n){
    for(i=2; i<n; i++){
        if(n%i == 0){
            return "your number is prime number"
        }
    }
    return "youn number is not a prime number"
}

var result = primeNumber(7)
console.log(result)