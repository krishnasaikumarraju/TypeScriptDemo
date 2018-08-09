"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Doctor_1 = require("./Doctor");
var Dentist = /** @class */ (function (_super) {
    __extends(Dentist, _super);
    function Dentist(_n, _exp, _visitHours) {
        var _this = _super.call(this, _n, _exp) || this;
        _this._n = _n;
        _this._exp = _exp;
        _this._visitHours = _visitHours;
        return _this;
    }
    Dentist.prototype.getVisitingHours = function () {
        return this._visitHours;
    };
    Dentist.prototype.getConsultationFee = function () {
        return _super.prototype.getConsultationFee.call(this) + 300;
    };
    return Dentist;
}(Doctor_1.Doctor));
exports.Dentist = Dentist;
