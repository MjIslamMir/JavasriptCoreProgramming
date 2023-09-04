/** @format */

//Closure is a function that remembers its outer variable and can acccess them
//In JS all functions are closures
//i.e they automatically remember where they were created using a hidden [[Environment]] property &
//then their code can access outer variables

//How lexicl scoping works: Every function has scope of its own
function outerFunction() {
  var name = "outerFunctionVariable"; // name is a local variable created by outerFunction
  function innerFunction() {
    // innerFunction() is the inner function, that forms the closure
    console.log("This outer function variable :", name);
    // use variable declared in the parent function
  }
  innerFunction(); //inner function called
}
outerFunction(); //outerFunction called

//Closures
//Running this code has exactly the same effect as the previous example of the outerFunc function above. 
//What's different (and interesting) is that the innerFunc() inner function is returned from the outer function before being executed.

//Any other languages this may fail but in JS this is valid code because of closures
function outerFunc() {
  const name = "Say Closure";
  function innerFunc() {
    console.log(name);
  }
  return innerFunc();
}

const closee = outerFunc;
closee();
//A closure is the combination of a function and the lexical environment within which that function was declared. 
//This environment consists of any local variables that were in-scope at the time the closure was created. 
//In this case, closee is a reference to the instance of the function outerFunc that is created when closee is run. 
//The instance of outerFunc maintains a reference to its lexical environment, 
//within which the variable name exists. For this reason, when Closee is invoked, 
//the variable name remains available for use, and "Say Closure" is passed to console.log.


function multiplier(num1){
    return function(num2){
        return num1*num2;
    }
}
let multiplyBy5=multiplier(5);
let multi10=multiplyBy5(10);
console.log(multi10);
let multi20=multiplyBy5(20);
console.log(multi20);