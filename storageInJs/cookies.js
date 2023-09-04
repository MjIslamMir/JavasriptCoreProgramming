// setTimeout(setCookies,5000);
let el=document.getElementById('cookieData');
function setCookies(name,value,timeInDays,path){
    let rightNow=new Date();
    let expireTime=rightNow+timeInDays*24*60*60;
    let encodeValue=encodeURIComponent(value);
    let cookie=name +'='+encodeValue;
    if(path){
        cookie+=';path='+'/'+path;
    }
    if(typeof timeInDays==='number'){
        cookie+=';max-age='+expireTime;
    }
    cookie+=";samsite"
    document.cookie=cookie;
    // el.innerHTML=new String(cookie);
    console.log(cookie);
}
setCookies('Name','MjIsam',1,'')
function getCookie(name){
    let cookiestring=document.cookie;//document.cookie;
    let splittedString=cookiestring.split(';');
    for(let x of splittedString){
        if(x.split("=")[0]==name){
            return decodeURIComponent(x.split("=")[1]);
        }
    }
    return 'No such Cookie';
}
console.log(getCookie('Name'));
function deleteCookie(name){
    document.cookie=`${name}=;max-age=0`;
}
deleteCookie('Name');
console.log(getCookie('Name'));