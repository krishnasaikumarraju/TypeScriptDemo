"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(id_p, name_p, salary_p, isEligible_p) {
        this.id = id_p;
        this.name = name_p;
        this.salary = salary_p;
        this.isEligible = isEligible_p;
    }
    Employee.prototype.getNetSalary = function () {
        return this.salary + (this.salary * 0.25) - (this.salary * 0.10);
    };
    return Employee;
}());
exports.Employee = Employee;
