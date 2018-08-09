"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square = /** @class */ (function () {
    function Square() {
    }
    Object.defineProperty(Square.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (s) {
            this._size = s;
        },
        enumerable: true,
        configurable: true
    });
    Square.prototype.getArea = function () {
        return this._size * this._size;
    };
    return Square;
}());
exports.Square = Square;
