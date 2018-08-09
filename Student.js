"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(_roll, _name) {
        this._roll = _roll;
        this._name = _name;
        console.log("Object Created");
    }
    Student.prototype.getDetails = function () {
        return "Rolll Number is :" + this._roll + " Name is " + this._name;
    };
    return Student;
}());
exports.Student = Student;
