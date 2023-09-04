//Quantifiers +, *, ? and {n}
//{n}=> n represents the length of the string: d{5} represents 5 digits
console.log( "I'm 12345 years old".match(/\d{5}/) ); 
//[ '12345', index: 4, input: "I'm 12345 years old", groups: undefined ]
console.log( "I'm 12345 years old".match(/\d{5}/)[0] ); 
//12345
//range {3,5} eg /d{3-5} 3 to 5 digits
//+ eg /d0+ a digit followed by one of more zeroes
//* eg /d0* a digit followed by zero or more zeroes
console.log( "100 10 1".match(/\d0+/g) );//[ '100', '10' ]
console.log( "100 10 1".match(/\d0*/g) );//[ '100', '10', '1' ]


//sets and Ranges
console.log( "Mop top".match(/[tm]op/gi) );//[ 'Mop', 'top' ]
console.log( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) );//[ 'xAF' ]
// \d – is the same as [0-9],
// \w – is the same as [a-zA-Z0-9_],
// \s – is the same as [\t\n\v\f\r ], plus few other rare Unicode space characters.

//Excluding ranges
// [^aeyo] – any character except 'a', 'e', 'y' or 'o'.
// [^0-9] – any character except a digit, the same as \D.
// [^\s] – any non-space character, same as \S.

//OR
let regexp = /html|php|css|java(script)?/gi;

let str = "First HTML appeared, then CSS, then JavaScript";

console.log( str.match(regexp) );
//[ 'HTML', 'CSS', 'JavaScript' ]
//I love HTML|CSS matches I love HTML or CSS.
//I love (HTML|CSS) matches I love HTML or I love CSS.