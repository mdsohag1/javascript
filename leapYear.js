
function leapYear(year){
    const raminder = year%4
    if(raminder == 0){
        return true;
    }else{
        return false;
    }
}
var cheak = leapYear(2000)
console.log(cheak)