/** @format */

//We may decide to execute a function not right now but at a certian time later.
//That is called scheduling

//setTimeout :=> allows us to run a code after a certain amount of time.

//Order of Execution
//Order of Execution:1
console.log("This statement is writtten before setTimeout is called");
function SetTimeoutDemo(name, age) {
  console.log(`SetTimeOut=> My name is : ${name} and Age is : ${age}`);
}
//setTimeout(functionName,optionalDelay,optialArg1,OptionalArg2,....)
//Order of Execution:3
///setTimeout expects a reference to a function rather than a call to function
let timerId = setTimeout(SetTimeoutDemo, 20, "Mujahi dul Islam", 30);
//Order of Execution:2
console.log("This statement is writtten After setTimeout is called");
            
                //output without clearTimeout(...)
// This statement is writtten before setTimeout is called
// This statement is writtten After setTimeout is called
// SetTimeOut=> My name is : Mujahi dul Islam and Age is : 30

//to clear the setTimeout we use clearTimeout that can be used only when setTimeout has an identifier
clearTimeout(timerId); //so the setTimeout won't be executed
                //output with clearTimeout(...)
// This statement is writtten before setTimeout is called
// This statement is writtten After setTimeout is called


//setInterval :=> allows us to run a code repeatedly: after a certain interval of time.
//setInterval is similar to setTimeout except that it is executed after every defined interval

console.log("This statement is writtten before setInterval is called");
function SetIntervalDemo(name, age) {
  console.log(`SetInterval=> The name is : ${name} and Age is : ${age}`);
}
let intervalId=setInterval(SetIntervalDemo,20,"MilkyWay",1000000)
console.log("This statement is writtten after setInterval is called");
// This statement is writtten before setInterval is called
// This statement is writtten After setInterval is called
// SetInterval=> My name is : MilkyWay and Age is : 1000000
// SetInterval=> My name is : MilkyWay and Age is : 1000000
///.....SetInterval is repeated after every 20 milliseconds

//to clear the setInterval we use clearInterval that can be used only when setTInterval has an identifier
clearInterval(intervalId); //so the setTimeout won't be executed
                //output with clearTimeout(...)
// This statement is writtten before setInterval is called
// This statement is writtten After setInterval is called

//setTime out call with arrow functions
let arrTimeout=setTimeout(()=>{console.log("SetTimeOut called from arrow function");},10);
//SetTimeOut called from arrow function
clearTimeout(arrTimeout);