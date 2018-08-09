function Student(){
    this.roll=0;
    this.name="";
    this.mark1=0;
    this.mark2=0;
}

s1=new Student()
s1.roll=5001;
s1.name="karthik";
s1.mark1=90;
s1.mark2=80;
s1.age=50;

s2=new Student()
s2.roll=5002;
s2.name="ram";
s2.mark1=95;
s2.mark2=70;

Student.prototype.age=30;
Student.prototype.getTotal=function() {
    return this.mark1+this.mark2;
}
Student.prototype.getAverage=function() {
    return (this.mark1+this.mark2)/2;
}
delete Student.prototype.roll;
console.log(s1.roll)
console.log(s1.name)
console.log((s1.age))
console.log((s1.mark1))
console.log((s1.mark2))
console.log((s1.getTotal()))
console.log((s1.getAverage()))

console.log(s2.roll)
console.log(s2.name)
console.log((s2.age))
console.log((s2.mark1))
console.log((s2.mark2))
console.log((s2.getTotal()))
console.log((s2.getAverage()))

s3=new Student();
s3.roll=5003;

console.log(s3.roll)