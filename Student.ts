export class Student{

    constructor(private _roll:number,private _name:string,){
        console.log("Object Created")
    }

   public getDetails():string{
        return `Rolll Number is :${this._roll} Name is ${this._name}`
    }
}