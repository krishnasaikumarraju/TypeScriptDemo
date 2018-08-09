"use strict";
exports.__esModule = true;
var Dentist_1 = require("./Dentist");
var ENTSpecialist_1 = require("./ENTSpecialist");
var d;
d = new Dentist_1.Dentist('Karthik', 10, "10-1");
console.log(d.getConsultationFee());
d = new ENTSpecialist_1.ENTSpecialist('Ram', 20, ['Monaday', 'Wednesday']);
console.log(d.getConsultationFee());
