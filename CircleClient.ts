import {Circle} from './Circle'

let c1:Circle;

c1=new Circle();
c1.radius=5;
console.log(`Radius is : ${c1.radius}`)
console.log(`Area is : ${c1.getArea()}`)
console.log(`Diameter is : ${c1.getDiameter()}`)
