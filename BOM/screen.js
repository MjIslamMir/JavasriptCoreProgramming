let locat=window.screen;
console.log(locat);
const aList=document.createElement('ul');
const parent=document.querySelector(".locationElements");
console.log(parent);
for(el in locat){
    const element=document.createElement('li');
    const text=`Key :=> [${el}] :: value :=>[${locat[el]}]`;
    element.innerText=text;
    aList.appendChild(element);
    console.log(element);
}
parent.appendChild(aList);