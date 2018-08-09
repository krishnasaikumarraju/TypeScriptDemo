export class Circle{
    radius:number;
    getArea():number{
        return this.radius*this.radius*3.14;
    }

    getDiameter():number{
        return 2*this.radius;
    }
}