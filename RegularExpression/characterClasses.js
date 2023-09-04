//A character class is a special notation that matches any symbolfrom a certain set.
// digit class: \d corresponds to any single digit
// space class : \s corresponds to space and others are \t \n \v \f \r
// word : \w corresponds to any single letter (alphabet|digit|_ underscore)
// So \d\s\w represents a digit followed by space followed by wordly character
//Example 
let str = 'I 2 love Regular Expressions';
console.log(str.match(/\d\s\w\w\w\w\s/gi)); 
//Output: [ '2 love ' ]

//Inverse Classes
// \D: Non -digit. Any  character except digit
// \S: Non Space. Any  character except space
// \W: Non Wordly. Any  character except worrdly character
//Example

let str1='We will, we will2 rock it';
console.log(str1.match(/\s\w\w\w\w\D/gi));
//Output: [ ' will,', ' rock ' ]


//(.)dot character match any character except space
let str2='ECMA-6 ECMA-7,ECMA 8 ECMA-9 ECMA\n10 0ECMA-11';
let regEx=/.C.A-./gi;
console.log(str2.match(regEx));
// [ 'ECMA-6', 'ECMA-7', 'ECMA-9', 'ECMA-1' ]


//Anchors
//String start (^) carrot symbol: matches at the beginning of the symbol.
//String end ($) dollar symbol: matches at the beginning of the symbol.
let regEx2=/^\d{2}\:\d{2}$/gi;
console.log(regEx2.test('12:23'));
console.log(regEx2.test('123:2'));
console.log(str2.match(/^\w{4}.\d/gmi));//
console.log((/^\w{4}-\d/gi).test(str2));//true
console.log((/\d{2}$/gi).test(str2));//true


//Word boundary(\b)
//Word Boundary: 3 different positions qualify as word boundaries
//1: If the first string character is a \w type character
//2: B/w 2 caharacters in astring where one is \w type and another is not
//3: if the last string character is a \w type character  

//Example:
console.log('Well come! to Javascript'.match(/\bWell\b/));
console.log('Well come! to Javascript'.match(/\bcome\b/));
console.log('Well come! to Javascript'.match(/\bWel\b/));//null
console.log('Well come! to Javascript'.match(/\bJavascript\b/));
// [
//     'Well',
//     index: 0,
//     input: 'Well come! to Javascript',
//     groups: undefined
//   ]
//   [
//     'come',
//     index: 5,
//     input: 'Well come! to Javascript',
//     groups: undefined
//   ]
//   null
//   [
//     'Javascript',
//     index: 14,
//     input: 'Well come! to Javascript',
//     groups: undefined
//   ]