export let myAge:number=20;

export function multiply(a:number,b:number):number
{
    return a*b;
}

export class Calc{

    constructor(private x:number,private y:number){
        console.log("Calc Created");
    }

    getSum():number{
        return this.x+this.y;
    }

    getDivision(){
        return this.x/this.y;
    }
}

export let prices:number[]=[500,600,700];


