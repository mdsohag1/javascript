// !5 = 1*2*3*4*5
// !6 = 1*2*3*4*5*6
// !7 = 1*2*3*4*5*6*7
// !8 = 1*2*3*4*5*6*7*8


function Fectorial (fecto){
    var fectorial = 1;
    for(i=1; i<fecto; i++){
        fectorial = fectorial * i
    }
    return fectorial
}

var result = Fectorial(12)
console.log(result)
var result1 = Fectorial(5)
console.log(result1)
var result2 = Fectorial(20)
console.log(result2)
var result3 = Fectorial(8)
console.log(result3)