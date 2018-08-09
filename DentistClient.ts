import {Dentist} from './Dentist'

let d:Dentist=new Dentist("Madhavan",10,"10AM-12PM")


console.log(`Consultation Fee :${d.getConsultationFee()}`)
console.log(d.getFullDetails())
console.log(d.getVisitingHours())