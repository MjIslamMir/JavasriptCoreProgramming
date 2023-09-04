//Escaping characters
//To search for special charactera [\ ^ $ . | ? * + ( )] literally we need to prepend them with a backlash(\)
//Example: 
let reg
console.log("Chapter 5.1".match(/\d\.\d/));//[ '5.1', index: 8, input: 'Chapter 5.1', groups: undefined ]
//when using regEx constructor
let regStr = "\\d\\.\\d";
console.log((regStr)); // \d\.\d (correct now)

let regexp = new RegExp(regStr);

console.log( "Chapter 5.1".match(regexp) ); // [ '5.1', index: 8, input: 'Chapter 5.1', groups: undefined ]