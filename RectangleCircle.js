"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./Rectangle");
var r1 = new Rectangle_1.Rectangle();
r1.setWidth(10);
r1.setHeight(20);
console.log("Width is " + r1.getWidth() + " and Height is " + r1.getHeight());
console.log("Area is : " + r1.getArea());
