"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.setWidth = function (w) {
        this._width = w;
    };
    Rectangle.prototype.setHeight = function (h) {
        this._height = h;
    };
    Rectangle.prototype.getHeight = function () {
        return this._height;
    };
    Rectangle.prototype.getWidth = function () {
        return this._width;
    };
    Rectangle.prototype.getArea = function () {
        return this._width * this._height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
