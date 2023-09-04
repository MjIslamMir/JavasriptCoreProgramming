//In js functions are first class citizens, therefore we can pass a function to another function as an argument
//A callback is a function that we pass to another function as an argument for executing latter
 function isOdd(number){
    return number%2!=0;
 }
 function isEven(number){
    return number%2==0;
 }
 function filter(numbers,callback){// here filter is highr order function
    let result=[];
    for(const num of numbers){
        if(callback(num)){
            result.push(num);
        }
    }
    return result
 }
 let myNumbers=[1,2,4,5,6,8,43,54,75];
 console.log(filter(myNumbers,isOdd));
 console.log(filter(myNumbers,isEven));
 
//  [ 1, 5, 43, 75 ]
//  [ 2, 4, 6, 8, 54 ]

//Nesting of many asynchrounous functions inside Callbacks is known as callback hell or pyramid of dome
//To avoid callback hell we use promises or async/await