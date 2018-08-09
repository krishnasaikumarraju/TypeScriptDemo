export class Employee{
    id:number
    name:string
    salary:number
    isEligible:boolean
    constructor(id_p:number ,name_p:string, salary_p:number, isEligible_p:boolean){
         this.id=id_p;
         this.name=name_p;
         this.salary=salary_p;
         this.isEligible=isEligible_p;
    }


    
   getNetSalary():number{
      return  this.salary+(this.salary*0.25)-( this.salary*0.10);
   }
}

