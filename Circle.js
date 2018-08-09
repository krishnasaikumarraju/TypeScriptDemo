"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * 3.14;
    };
    Circle.prototype.getDiameter = function () {
        return 2 * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
