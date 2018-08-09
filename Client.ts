import {myAge, multiply, Calc, prices} from './Something'



console.log(myAge)
console.log(multiply(20,30))

let cal:Calc=new Calc(40,20)

console.log(cal.getSum())
console.log(cal.getDivision())

let myprices=prices;

myprices.forEach(function (x) {
    console.log(x)

})