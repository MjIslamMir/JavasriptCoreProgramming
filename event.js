const keyBoard=document.getElementById('keypad');
const ip=document.getElementsByName('input');
for(let i=0;i<=9;i++){
    const el=document.createElement('button');
    el.innerText=i;
    keyBoard.appendChild(el);
    el.style.cssText='display:inline-block;'
}
keyBoard.addEventListener('click',(event)=>{
    let target=event.target;
    ip.value+=target.value;
    event.preventDefault();
})