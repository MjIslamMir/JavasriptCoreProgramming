//The Function.prototype has a call method that calls a function name with the arguments 
//this is set to thisArg object inside the function 
let cat={type:"cat", sound:"Meow"};
let dog={type:"dog", sound:"Wouf"};
const say=function(msg){
    console.log(this);
    console.log(msg);
    console.log(this.type +' Says :'+this.sound);
};
say.call(cat, "what does a cat say");
say.call(dog, "what does a dog say");
// { type: 'cat', sound: 'Meow' }
// what does a cat say
// cat Says :Meow
// { type: 'dog', sound: 'Wouf' }
// what does a dog say
// dog Says :Wouf

//lly there is apply method that take argument of the function as an array
say.apply(cat,["What does a Cat Say using Apply Method"]);//
say.apply(cat,["What does Dog Say using Apply Method"]);
// { type: 'cat', sound: 'Meow' }
// What does a Cat Say using Apply Method
// cat Says :Meow
// { type: 'cat', sound: 'Meow' }
// What does Dog Say using Apply Method
// cat Says :Meow


//Using Bind method creates a new function whose this value is bound to the object that we provide
let Car={
    speed:5,
    start:function(){
        console.log(`Start with ${this.speed} km/h`);
    }
}
let Aircraft={
    speed:10,
    fly:function(){
        console.log(`flying with ${this.speed} km/h`);
    }
}

let Fly=Car.start.bind(Aircraft);
console.log(Fly());

// Start with 10 km/h