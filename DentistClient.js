"use strict";
exports.__esModule = true;
var Dentist_1 = require("./Dentist");
var d = new Dentist_1.Dentist("Madhavan", 10, "10AM-12PM");
console.log("Consultation Fee :" + d.getConsultationFees());
console.log(d.getFullDetails());
console.log(d.getVisitingHours());
