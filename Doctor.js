"use strict";
exports.__esModule = true;
var Doctor = /** @class */ (function () {
    function Doctor(_name, _experience) {
        this._name = _name;
        this._experience = _experience;
    }
    Doctor.prototype.getConsultationFee = function () {
        return 500.00;
    };
    Doctor.prototype.getFullDetails = function () {
        return "Name : " + this._name + " \n Experience :" + this._experience + " \n Fees " + this.getConsultationFee();
    };
    return Doctor;
}());
exports.Doctor = Doctor;
