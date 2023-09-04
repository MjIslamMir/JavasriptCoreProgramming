//Maps are similar to Object but keys can be of any type where as keys in Objects are string type

//1: creating a map
let myMap=new Map;
// setting key: values in Map
myMap.set("fullname","Mujahi dul Islam");
myMap.set("age",30);
console.log(myMap);
//Map(2) { 'fullname' => 'Mujahi dul Islam', 'age' => 30 }
//getting value
console.log(myMap.get("age"));
//30
myMap.set(1,"alpha");
myMap.set(2,"beta");
console.log(myMap.get(2));
//beta

//checking for the existance of key
console.log(myMap.has(2));//true
console.log(myMap.has(3));//false

//checking size of Map
console.log(myMap.size);
//4

//clearing a map
myMap.clear();
console.log(myMap);
//Map(0) {}


let greekMap=new Map([
    [1,"alpha"],[2,"beta"],[3,"gamma"]
]);
console.log(greekMap); 
//Map(3) { 1 => 'alpha', 2 => 'beta', 3 => 'gamma' }

//iterating over key
for(let key of greekMap.keys()){
    console.log(key);
}
// 1
// 2
// 3

//iterating over values
for(let val of greekMap.values()){
    console.log(val);
}
// alpha
// beta
// gamma

//iterating over enteries
for(let ent of greekMap.entries()){
    console.log(ent);
}
// [ 1, 'alpha' ]
// [ 2, 'beta' ]
// [ 3, 'gamma' ]

// Map does have forEach method also
myMap.forEach((val,key,myMap)=>{
    console.log(`the key is ${key} and value is ${val} in the map :${myMap} `);
})


// Map and Object Inter-conversion

let obj1={
    fname:"Mujahi",
    mname:"dul",
    lname:"islam"
}
//creating Map from Object
let mapFromObject= new Map(Object.entries(obj1));
console.log(mapFromObject);
// Map(3) { 'fname' => 'Mujahi', 'mname' => 'dul', 'lname' => 'islam' }

//creating Object from Map

let objectFromMap= Object.fromEntries(mapFromObject.entries());
console.log(objectFromMap);
// { fname: 'Mujahi', mname: 'dul', lname: 'islam' }

//Or
let objectFromMapNew= Object.fromEntries(mapFromObject);
console.log(objectFromMapNew);
//{ fname: 'Mujahi', mname: 'dul', lname: 'islam' }