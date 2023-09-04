//[[Prototype]]
//In JS Objects have a special hidden property [[Prototype]] that is either null or references another object. This is called a prototype
//When we read a property from and object and it is missing, Javascript automaticaly takes it from
// the prototype
//The property [[Prototype]]is internal and hidden, but there are many ways to set it.


//One of the ways to set a [[Prototype]] is to use __proto__ 
let animal={
    eat:true
};
let rabbit={
    jump:true
};
console.log(rabbit.__proto__);//[Object: null prototype] {}
console.log(Object.getOwnPropertyDescriptors(rabbit));
// {
//     jump: { value: true, writable: true, enumerable: true, configurable: true }
//   }

rabbit.__proto__=animal;
console.log(rabbit.__proto__);//{ eat: true }

console.log(rabbit.eat);//true  here eat prop is inherited from animal Object by rabbit Object
//__proto__ can be either set to null or an object
//__proto__ is getter/setter for [[Prototype]]
// for in loop iterates over inherited props as well to avoid such thing we use Object.hasOwnProperty(prop)

for(let prop in rabbit){
    console.log(prop);
}
//  jump eat

for(let prop in rabbit){
    let isOwnProp=Object.hasOwnProperty(prop);
    if(isOwnProp){
        console.log(`is Own Prop : ${prop}`);
    }
    else{
        console.log(`inherited Prop : ${prop}`);
    }
}
// inherited Prop : jump
// inherited Prop : eat



//  F.prototype: is used to set the prototype for the created using new 
let animilia ={
    eats:true
};
function Rabbitia(name){
    this.name=name;
}
Rabbitia.prototype=animilia;
let rabbito=new Rabbitia("Visca Barca");
console.log(rabbito.eats);//true

