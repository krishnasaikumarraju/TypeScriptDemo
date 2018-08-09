export class Doctor{

    constructor(private _name:string,private _experience:number){


    }

    getConsultationFee():number{
        return 500.00
    }

    getFullDetails():string{
        return `Name : ${this._name} \n Experience :${this._experience} \n Fees ${this.getConsultationFee()}`
    }

}

