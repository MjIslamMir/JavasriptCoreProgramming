/** @format */

// Ways to create an array
let arrayOne = [1, 2, 3, 4, 5, 6]; //using square bracket
let arrayTwo = new Array(2, 3, 4, 5, 6, 7); //using new operator
console.log(arrayOne);
// [ 1, 2, 3, 4, 5, 6 ]
console.log(arrayTwo);
//[ 2, 3, 4, 5, 6, 7 ]
//Using different method of array
//Length
console.log(`length of array [${arrayOne}] is : ${arrayOne.length}`);
// length of array [1,2,3,4,5,6] is : 6
//push: adding item at the end of array
console.log(arrayOne.push(2, 3, 4));
console.log("arrayOne after push operation", arrayOne);
// arrayOne after push operation [
//     1, 2, 3, 4, 5,
//     6, 2, 3, 4
//   ]
//pop: removing item at the end of array
console.log(arrayOne.pop());
//4
console.log("arrayOne after pop operation", arrayOne);
// arrayOne after pop operation [
//     1, 2, 3, 4,
//     5, 6, 2, 3
//   ]
//shift: removing element at the front of array
console.log(arrayOne.shift());
console.log("arrayOne after shift operation", arrayOne);
// arrayOne after shift operation [
//     2, 3, 4, 5,
//     6, 2, 3
//   ]
//unshift: adding element at the front of array
console.log(arrayOne.unshift(10, 11, 12));
console.log("arrayOne after unshift operation", arrayOne);
// arrayOne after unshift operation [
//     10, 11, 12, 2, 3,
//      4,  5,  6, 2, 3
//   ]
//Getting a new array from the existing one;
//using slice methed, this method is immutable, thus does not change the original array
let slicedArray = arrayOne.slice(2, 7); //where arguments indicate start and end of the index
console.log("sliced Array:", slicedArray);
// sliced Array: [ 12, 2, 3, 4, 5 ]
console.log("arrayOne after slice operation", arrayOne);

//using splice methed, this method is mutable, thus changes the original array
let splicedArray = arrayOne.splice(2, 7); // arguments indicate start index and number of elements
console.log("Spliced Array :", splicedArray);
// Spliced Array : [
//     12, 2, 3, 4,
//      5, 6, 2
//   ]
// arrayOne after splice operation [ 10, 11, 3 ]

//copying using spread operator

let spreadArray = [...arrayTwo];
console.log("Array created using spread operation: ", spreadArray);
// Array created using spread operation:  [ 2, 3, 4, 5, 6, 7 ]
//copying using forloop

let len = arrayTwo.length;
let forLoopArray = [];
for (let i = 0; i < len; i++) {
  forLoopArray[i] = arrayTwo[i];
}
console.log("forLoopArray : ", forLoopArray);
// forLoopArray :  [ 2, 3, 4, 5, 6, 7 ]
//concatenate array
let arrayThree = [...arrayOne, ...arrayTwo];
console.log("concatenated using spread operator :", arrayThree);
// concatenated using spread operator : [
//     10, 11, 3, 2, 3,
//      4,  5, 6, 7
//   ]
console.log("arrayTwo :", arrayTwo);
//Some searching method in Array

//array.indexOf(item,[fromIndex])
console.log("Index of 4 in arrayTwo after index 1 is:", arrayTwo.indexOf(4, 1));
// Index of 4 in arrayTwo after index 1 is: 2
arrayTwo.push(2);
console.log("arrayTwo :", arrayTwo);
//array.lastIndexOf(item,[fromIndex])
console.log("last Index of 2 in arrayTwo:", arrayTwo.lastIndexOf(2));
// last Index of 2 in arrayTwo: 6
//array.includes(item,[from])

console.log("Whether value 2 exists in the arrayTwo :", arrayTwo.includes(2));
// Whether value 2 exists in the arrayTwo : true

//finding the element that stisfying the users condition
//array.find(callback);
//lets the element which is square of 2 in arrayTwo
console.log(arrayTwo.find((value, index) => value == index ** 2));
//returns value of find the value else undefined

//array.findIndex(callback);
//array.findLastIndex(callback)

//looping through an array other than using for..of and for loop

//array.forEach(calback)
arrayTwo.forEach((item, index, arrayTwo) => {
  if (item % 2 == 0) {
    console.log(
      `The item ${item} at index ${index} in array [${arrayTwo}] is Even`
    );
  } else {
    console.log(
      `The item ${item} at index ${index} in array [${arrayTwo}] is Odd`
    );
  }
});
// The item 2 at index 0 in array [2,3,4,5,6,7,2] is Even
// The item 3 at index 1 in array [2,3,4,5,6,7,2] is Odd
// The item 4 at index 2 in array [2,3,4,5,6,7,2] is Even
// The item 5 at index 3 in array [2,3,4,5,6,7,2] is Odd
// The item 6 at index 4 in array [2,3,4,5,6,7,2] is Even
// The item 7 at index 5 in array [2,3,4,5,6,7,2] is Odd
// The item 2 at index 6 in array [2,3,4,5,6,7,2] is Even

//filtering an array
//array.filter(callback)
//lets filter out some even numbers from the array
let filterArray = arrayTwo.filter((item) => item % 2 == 0);
console.log("The array from the even numbers of arrayTwo is :", filterArray);
// The array from the even numbers of arrayTwo is : [ 2, 4, 6, 2 ]

//lets sort an array
//the inbuilt array sort method give wrong results because
//it converts the item into string first lets see
arrayTwo.push(15, 23, 33, 11);
console.log("arrayTwo :", arrayTwo);
let testArray = [...arrayTwo];
let sortedArray = testArray.sort();
console.log("Here sorted array give wrong results", sortedArray);
// Here sorted array give wrong results [
//     11, 15, 2, 2, 23,
//      3, 33, 4, 5,  6,
//      7
//   ]

//now see the right method
//sort is mutable method
let fineSortedArray = testArray.sort((a, b) => a - b);
console.log("Here sorted array give right results", fineSortedArray);
// Here sorted array give right results [
//     2, 2,  3,  4,  5,
//     6, 7, 11, 15, 23,
//    33
//  ]
console.log("arrayTwo :", arrayTwo);
testArray.sort((a, b) => b - a);
console.log("Reverse sort :", testArray);
// Reverse sort : [
//     33, 23, 15, 11, 7,
//      6,  5,  4,  3, 2,
//      2
//   ]

//lets map this array
//aray.map(callback)
//finding the square of each element of the array
let mappedArray = arrayTwo.map((item) => item ** 2);
console.log("arrayTwo :", arrayTwo);
console.log(
  "The newly mapped array that has squares of numbers in arrayTwo :",
  mappedArray
);
// The newly mapped array that has squares of numbers in arrayTwo : [
//     4,    9,  16,  25,
//    36,   49,   4, 225,
//   529, 1089, 121
// ]
//reversing an array
console.log("REVERSING :", arrayTwo.reverse());
// REVERSING : [
//     11, 33, 23, 15, 2,
//      7,  6,  5,  4, 3,
//      2
//   ]

//WORKING WITH STRINGS AND ARRAY
let sampleString1 = "Mujahi dul islam";
let sampleString2 = "Mujahi dul islam";
let arrayFromString1 = sampleString1.split(" "); //here the argument is delimiter
let arrayFromString2 = sampleString2.split("");
console.log("Array from string with',' delimiter", arrayFromString1);
//[ 'Mujahi', 'dul', 'islam' ]
console.log("Array from string with no delimiter", arrayFromString2);
/*[
    'M', 'u', 'j', 'a',
    'h', 'i', ' ', 'd',
    'u', 'l', ' ', 'i',
    's', 'l', 'a', 'm'
  ]
*/
// Now let us create string from array

let stringFromArray1 = arrayFromString1.join(",");
let stringFromArray2 = arrayFromString2.join("");
console.log("String from string with',' delimiter : ", stringFromArray1);
// Mujahi,dul,islam
console.log("String from string with no delimiter :", stringFromArray2);
// Mujahi dul islam

//Reducing a value t a particular value
//array.reduce(callback,[accumulator])
console.log("arrayTwo :", arrayTwo);
// Lets find the sum of the values of an array
let reducedValue = arrayTwo.reduce((acc, item) => acc + item, 100);
console.log(reducedValue);
//211

console.log(Number.isInteger('172'));

//Destructuring
 let source=["alpha","Beta"];
 let [val1,val2]=source;

 console.log(val1,val2);//alpha beta

 //rest operator
let cities=["SXR","DEL","MUM","HDB","BNG"];
let [firstCity,secondCity,...restOfCities]=cities;
console.log(`First City: ${firstCity},${secondCity},and rest of the Cities are ${restOfCities}`);
//First City: SXR,DEL,and rest of the Cities are MUM,HDB,BNG


function sum(a,b){
  return a+b;
}
console.log(sum(1,2,3,4,5,6));
//  3

function altSum(...arg){
  let sum=0;
  for(let ar of arg){
    sum+=ar;
  }
  return sum;
}
console.log(altSum(1,2,3,4,5,6));
//  21
