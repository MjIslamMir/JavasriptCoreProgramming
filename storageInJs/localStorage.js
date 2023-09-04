function setStorageItem(name,value){
    localStorage.setItem(name,value);
}
function deleteStorageItem(name){
    localStorage.removeItem(name);
}
function getStorageItem(name){
    localStorage.getItem(name);
}
function setSessionItem(name,value){
    sessionStorage.setItem(name,value);
}
function deleteSessionItem(name){
    sessionStorage.removeItem(name);
}
function getSessionItem(name){
    sessionStorage.getItem(name);
}
setStorageItem('Name','Mujahi dul Islam');
setStorageItem('Age',30);
setStorageItem('Location','sxr');
getStorageItem('Name');
getStorageItem('Age');
getStorageItem('Location');
console.log("Local Storage:",localStorage);
//Storage {Age: '30', Name: 'Mujahi dul Islam', Location: 'sxr', loglevel: 'INFO', length: 4}
for(key in localStorage){
    if(localStorage[key] instanceof Function){
        continue;
    }
    console.log(`Key: ${key} and value :${localStorage[key]}`);
}
// Key: Age and value :30
// Key: Name and value :Mujahi dul Islam
// Key: Location and value :sxr
// Key: loglevel and value :INFO
// Key: length and value :4

localStorage.clear();
setSessionItem('Name','Mujahi dul Islam');
setSessionItem('Age',30);
setSessionItem('Location','sxr');
getSessionItem('Name');
getSessionItem('Age');
getSessionItem('Location');
console.log("Session Storage :",sessionStorage)
//Storage {Age: '30', IsThisFirstTime_Log_From_LiveServer: 'true', Name: 'Mujahi dul Islam', Location: 'sxr', length: 4}
for(key in sessionStorage){
    if(sessionStorage[key] instanceof Function){
        continue;
    }
    console.log(`Key: ${key} and value :${sessionStorage[key]}`);
}
// Key: Age and value :30
// Key: IsThisFirstTime_Log_From_LiveServer and value :true
// Key: Name and value :Mujahi dul Islam
// Key: Location and value :sxr
// Key: length and value :4