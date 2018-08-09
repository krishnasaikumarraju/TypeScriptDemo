"use strict";
exports.__esModule = true;
exports.myAge = 20;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
var Calc = /** @class */ (function () {
    function Calc(x, y) {
        this.x = x;
        this.y = y;
        console.log("Calc Created");
    }
    Calc.prototype.getSum = function () {
        return this.x + this.y;
    };
    Calc.prototype.getDivision = function () {
        return this.x / this.y;
    };
    return Calc;
}());
exports.Calc = Calc;
exports.prices = [500, 600, 700];
