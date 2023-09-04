//function for event registed at HTML attribute
function showAlert(){
    alert("Button clicked ");
}
//DOM level 0 Event

const Button1=document.querySelector('#but1');
console.log(Button1);
Button1.onclick = function() { alert("event registered at DOM level 0"); }

//DOM level 2 event
const Button2=document.querySelector('#but2');
Button2.addEventListener('click',()=>{
    alert("event registered at DOM level 2")
});

const Button3=document.querySelector('#but3');
function someFunc(){
    alert("event Defined outside the when registering event")
}
Button3.addEventListener('click',someFunc);
setTimeout(()=>{
    Button3.removeEventListener('click',someFunc);
    console.log("Event Listner Removed");
},5000)