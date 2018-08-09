import {Doctor} from './Doctor'

export class Dentist extends Doctor{

    constructor( private _n:string,private _exp:number, private _visitHours:string){
        super(_n,_exp);

    }

    getVisitingHours():string{
          return this._visitHours
    }

    getConsultationFee():number{
        return super.getConsultationFee()+300;
    }

}