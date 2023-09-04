// creating objects
//using object literals
let obj1={
    fname:"Mujahi",
    mname:"dul",
    lname:"islam"
}
//using objeect constructor syntax
let obj2={
    fname:"Mj",
    mname:"dul",
    lname:"islam"
}
console.log(obj1);
//{ fname: 'Mujahi', mname: 'dul', lname: 'islam' }

//Adding new Property

obj1.location="srinagar";
obj1.age=30;
console.log(obj1);
// {
//     fname: 'Mujahi',
//     mname: 'dul',
//     lname: 'islam',
//     location: 'srinagar',
//     age: 30
// }


//Deleting property of an object

delete obj1.age;
console.log(obj1);
// { fname: 'Mujahi', mname: 'dul', lname: 'islam', location: 'srinagar' }

// Property existance test
console.log("location" in obj1);
//true


//Looping over the object
for(let prop in obj1){
    console.log(prop,obj1[prop]);
}
// fname Mujahi
// mname dul
// lname islam
// location srinagar

//Keys of an object
console.log(Object.keys(obj1));
//returns array of keys of an object
//[ 'fname', 'mname', 'lname', 'location' ]

//Values of an object
console.log(Object.values(obj1));
//returns array of values of an object
//[ 'Mujahi', 'dul', 'islam', 'srinagar' ]

//Object Enteries
console.log(Object.entries(obj1));
//returns 2Darray of key,value of an object as following
// [
//     [ 'fname', 'Mujahi' ],
//     [ 'mname', 'dul' ],
//     [ 'lname', 'islam' ],
//     [ 'location', 'srinagar' ]
//   ]

let a={age:20};
let b={age:20};
//Two objects are same if they hav same reference
// Two independent object are never equal
console.log(a==b);//false
console.log(a.age==b.age);//true
console.log(a===b);//false
console.log(a.age===b.age);//true
console.log(Object.is(a,b));//false

//shallow copy : Ref remains same
let c=a;
console.log(a==c);//true
console.log(a===c);//true
console.log(Object.is(a,c));//true

//Deep copy: Refernce remains same

//Deep copy methods
//1: Deep copy using spread syntax
let d={...c};
console.log(d==c);//false
console.log(d===c);//false
console.log(Object.is(d,c));//false

//2: Using loop
let obj3={};
for(let key in obj1){
    obj3[key]=obj1[key];
}
console.log(obj3);
// { fname: 'Mujahi', mname: 'dul', lname: 'islam', location: 'srinagar' }

// 3: using Object.assign
 let clone=Object.assign({},obj2);
 console.log(clone);
// { fname: 'Mj', mname: 'dul', lname: 'islam' }

// 4: If  and object is serializable
 let copyObject=JSON.parse(JSON.stringify(obj1));
 console.log(copyObject);
//  { fname: 'Mujahi', mname: 'dul', lname: 'islam', location: 'srinagar' }


//Creating Reusable Object
//constructor function
function CreateUser(name){
    this.name=name;
    this.isAdmmin=false;
}
let user1=new CreateUser("MjIslam");
let user2=new CreateUser("MjMir");
console.log(user1);
//CreateUser { name: 'MjIslam', isAdmmin: false }
console.log(user2);
//CreateUser { name: 'MjMir', isAdmmin: false }

//Optional chaining stops execution on observing undefined or null and return undefined
let x=20,y=null,z;
console.log(y?.z?.x);//undefined 
console.log(x?.z?.y);//undefined


//Destructuring
let source={1:"alpha",2:"Beta"};
let {val1,val2}=source;

console.log(val1,val2);//alpha beta

//rest operator
let cities={firstCity:"SXR",secondCity:"DEL",3:"MUM",4:"HDB",5:"BNG"};
let {firstCity,secondCity,...restOfCities}=cities;
console.log(`First City : ${firstCity},Second City : ${secondCity},and rest of the Cities are : ${restOfCities}`);
//First City: SXR,DEL,and rest of the Cities are MUM,HDB,BNG

//Lets work with Object Property Configuration
console.log(obj1);
//{ fname: 'Mujahi', mname: 'dul', lname: 'islam', location: 'srinagar' }
console.log(obj2);
//{ fname: 'Mj', mname: 'dul', lname: 'islam' }

//Object property besides a value have three special flags
console.log(Object.getOwnPropertyDescriptors(obj1));
/*
    {
    fname: {
        value: 'Mujahi',
        writable: true,
        enumerable: true,
        configurable: true
    },
    mname: {
        value: 'dul',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lname: {
        value: 'islam',
        writable: true,
        enumerable: true,
        configurable: true
    },
    location: {
        value: 'srinagar',
        writable: true,
        enumerable: true,
        configurable: true
    }
    }
*/
/*
writable: if true, the value can be changed, otherwise readOnly
enumerable: if true, then listed in loops, otherwise not listed
configurable: if true, the property can be deleted and their attribute(flags) can be modified, otherwise not.
*/
let descriptor=Object.getOwnPropertyNames(obj1);
console.log(descriptor);
//[ 'fname', 'mname', 'lname', 'location' ]


// Changing the flags/atrributes of the an Object property

Object.defineProperty(obj1,"location",{
    writable:false,
    enumerable:false,
    configurable:true
});
console.log(Object.getOwnPropertyDescriptors(obj1));
/*
    ....
    location: {
        value: 'srinagar',
        writable: false,
        enumerable: false,
        configurable: true
    }
*/
// Changing the flags/atrributes of the multiple properties of an Object
Object.defineProperties(obj1,{
    "fname":{
        writable:false,
        enumerable:true,
        configurable:true
    },
    "lname":{
        writable:false,
        enumerable:true,
        configurable:true
    }
})
console.log(Object.getOwnPropertyDescriptors(obj1));
/*
        {
        fname: {
            value: 'Mujahi',
            writable: false,
            enumerable: true,
            configurable: true
        },
        mname: {
            value: 'dul',
            writable: true,
            enumerable: true,
            configurable: true
        },
        lname: {
            value: 'islam',
            writable: false,
            enumerable: true,
            configurable: true
        },
        location: {
            value: 'srinagar',
            writable: false,
            enumerable: false,
            configurable: true
        }
        }
*/

//flags aware way of cloning object

let clonedObjectWithFlags=Object.defineProperties({},Object.getOwnPropertyDescriptors(obj1));
console.log(Object.getOwnPropertyDescriptors(clonedObjectWithFlags));
/*

        {
        fname: {
            value: 'Mujahi',
            writable: false,
            enumerable: true,
            configurable: true
        },
        mname: {
            value: 'dul',
            writable: true,
            enumerable: true,
            configurable: true
        },
        lname: {
            value: 'islam',
            writable: false,
            enumerable: true,
            configurable: true
        },
        location: {
            value: 'srinagar',
            writable: false,
            enumerable: false,
            configurable: true
        }
        }
*/


    //Sealing an Object
    //Property descriptors work at property level but there methods that work at Object level


    //Object.preventExtension(objectName)=> forbids the addition of new properties to the object 
    //Object.seal(objectName)=> forbids the addition or removal of  properties of an object 
console.log(Object.isExtensible(obj1));//true
Object.preventExtensions(obj1);
console.log(Object.isExtensible(obj1));//false
    //sets configurable flags to false for all the properties 
console.log(Object.isSealed(obj1));//false
Object.seal(obj1);
console.log(Object.isSealed(obj1));///true
    //Object.freeze(objectName)=> forbids the addition or removal or change of  properties of an object
    //sets configurable and writable flags to false for all the propertie
console.log(Object.isFrozen(obj1));//false
Object.freeze(obj1);
console.log(Object.isFrozen(obj1));///true

console.log(Object.getOwnPropertyDescriptors(obj1));
/*
{
  fname: {
    value: 'Mujahi',
    writable: false,
    enumerable: true,
    configurable: false
  },
  mname: {
    value: 'dul',
    writable: false,
    enumerable: true,
    configurable: false
  },
  lname: {
    value: 'islam',
    writable: false,
    enumerable: true,
    configurable: false
  },
  location: {
    value: 'srinagar',
    writable: false,
    enumerable: false,
    configurable: false
  }
}


*/