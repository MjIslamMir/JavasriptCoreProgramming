//In JS class is a kind of function
class Mj{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    myDetails=function(){
        return `${this.name} ${this.age}`;
    }
}
let Muji=new Mj("Mujahidulislam",30);
// Creates a function named Mj that becomes the result of the class declaration
// The function code is taken from the constructor
console.log(Muji.myDetails());

//difference b/w class and function
    //Function created by class is labelled by a special internal property [[isClassConstructor]]:true
    //class method are non-enumerable
    //class always uses "use-strict" 