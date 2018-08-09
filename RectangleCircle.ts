import {Rectangle} from './Rectangle'

let r1:Rectangle=new Rectangle();

r1.setWidth(10);
r1.setHeight(20);

console.log(`Width is ${r1.getWidth()} and Height is ${r1.getHeight()}`)

console.log(`Area is : ${r1.getArea()}`)