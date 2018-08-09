"use strict";
exports.__esModule = true;
var Something_1 = require("./Something");
console.log(Something_1.myAge);
console.log(Something_1.multiply(20, 30));
var cal = new Something_1.Calc(40, 20);
console.log(cal.getSum());
console.log(cal.getDivision());
var myprices = Something_1.prices;
myprices.forEach(function (x) {
    console.log(x);
});
