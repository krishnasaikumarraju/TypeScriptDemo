export class Contact{
    private _email:string;
    private  _phone:string;

   constructor(email:string, phone:string){
      this._email=email;
      this._phone=phone;
   }

   getFullDetails():string{
       return `Email : ${this._email} Phone : ${this._phone}`;
   }
}