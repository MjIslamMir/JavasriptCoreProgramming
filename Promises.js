// A promise is an object reprsenting the eventual completion or failure of an asynchronous operation.
// .then returns a new promise on completion of prior proise.
// promise states=> Pending, Fullfilled(with a value) or Rejected(for a reason)
//let promise=new Promise(function(resolve,reject)){resolve("done") reject(throw new Error)}); the function is called executor
//When new promise is created the executor runs automatically eventually to produce results.
let promise =new Promise(function(resolve,reject){
    resolve("Successfully Resolved");
    reject(new Error("Error"));
});
promise.then((res=>console.log(res),rej=>console.log(rej)));
// Successfully Resolved


function getPromise(URL){
    let myProm=new Promise(function(resolve,reject){
        let req=new XMLHttpRequest();
        req.open('GET',URL);
        req.onload=function(){
            if(req.status==200){
                resolve(req.response);
            }
            else
            reject("There is an error");
        };
        req.send();
    });
    return myProm;
}
let myURL="https://pokeapi.co/api/v2/pokemon?limit=50";
let prom=getPromise(myURL);

prom.then(result => {
    let onePokemon = JSON.parse(result);
    return onePokemon;
}).then(onePokemonURL => {
    console.log(onePokemonURL.results[0]);
}).catch(error => {
    console.log('In the catch', error);
});

//We have encountered an Error!