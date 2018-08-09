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
var ENTSpecialist = /** @class */ (function (_super) {
    __extends(ENTSpecialist, _super);
    function ENTSpecialist(_n, _e, _visitDays) {
        var _this = _super.call(this, _n, _e) || this;
        _this._n = _n;
        _this._e = _e;
        _this._visitDays = _visitDays;
        return _this;
    }
    ENTSpecialist.prototype.getConsultationFee = function () {
        return _super.prototype.getConsultationFee.call(this) + 1000;
    };
    ENTSpecialist.prototype.getVisitingDetails = function () {
        var output = "";
        for (var _i = 0, _a = this._visitDays; _i < _a.length; _i++) {
            var d = _a[_i];
            output = output + d;
        }
        return output;
    };
    return ENTSpecialist;
}(Doctor_1.Doctor));
exports.ENTSpecialist = ENTSpecialist;
