// Function Declaration
function sum(a, b) {
    return a + b;
  }
console.log("Sum : ",sum(5,10));
//Sum :  15

// Function Expression
let prod = function(a,b){
    return a*b;
}
let product=prod(5,10);
console.log("Product : ",product);
//Product :  50

//annonymous FE
let produ = (a,b)=>{
    return a*b;
}
let prodAnon=produ(10,10);
console.log("Product By Anon Function : ",prodAnon);
// Product By Anon Function :  100

//Immediately invoked function expression: initiallywhen there was var, since it only had block scope 
//so keep the variable block scoped IFFE was created
//HERE functionl expression is created in immidiatly invoked and has its own private variables  
(function(){
    let name="Mujahidul Islam";
    console.log(name);
})();
// Mujahidul Islam