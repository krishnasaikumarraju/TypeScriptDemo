import {Doctor} from './Doctor'


export class ENTSpecialist extends Doctor{

    constructor(private _n:string,private _e:number,private _visitDays:string[]){
        super(_n,_e)
    }

    getConsultationFee():number{
        return super.getConsultationFee()+1000;
    }

    getVisitingDetails():string{
        let output:string="";
        for(let d of this._visitDays){
            output=output+d;
        }
        return output;
    }
}