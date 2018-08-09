(function () {
    console.log("Welcome")
})()


var student=(function create() {
    function Stud(a,b,c,d) {
        this.roll=a;
        this.name=b;
        this.mark1=c;
        this.mark2=d;
    }
    Stud.prototype.getTotal=function () {
        return this.mark1+this.mark2
    }
    Stud.prototype.getAverage=function () {
        return (this.mark1+this.mark2)/2
    }
    return Stud;
})();

s1=new student(5001,"karthik",80,60);
// s1.roll=5001;
// s1.name="karthik"
// s1.mark1=80;
// s1.mark2=79;

//svar r=create();
//s1=new r();
console.log(s1.roll)
console.log(s1.name)
console.log(s1.mark1)
console.log(s1.mark2)
console.log(s1.getTotal())
console.log(s1.getAverage())
