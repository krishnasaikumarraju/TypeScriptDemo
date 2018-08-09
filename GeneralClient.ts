import {Doctor} from './Doctor'
import {Dentist} from './Dentist'
import {ENTSpecialist} from './ENTSpecialist'


let d:Doctor;

d=new Dentist('Karthik',10,"10-1")

console.log(d.getConsultationFee())

d=new ENTSpecialist('Ram',20,['Monaday','Wednesday'])

console.log(d.getConsultationFee())

