//Regular Expression is a powerful way to search and replace text, RE consists of pattern and optinal flags

//Ways to create a regular expression
let regExp1WOFlags=/hello/;
//if used with flags /hello/flags=> /hello/gmisuy where
//g is global
//m is multiline mode
//i is ignore (case insensitive)
//s is dotAll mode to match new line chareacter in multiline mode
//u is enable full unicode mode
//y is sticky mode: searching at the exact position in the text.

let regExp2WOFlags=new RegExp('hello');//RegExp('RegExp','optional flags')
console.log(regExp1WOFlags, regExp2WOFlags);
//Reglar Expressions are integrated with string methods

//searching str.match(regExp);
let Str='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, quibusdam fugiat ullam, est deleniti, aut eveniet vero consequatur voluptatem expedita facere ut repudiandae doloremque consectetur impedit optio. Facere quidem, quae totam velit ducimus maiores amet in sed sapiente quod nesciunt id ipsa nostrum nobis, sunt suscipit voluptatum nemo, rem a!'
console.log(Str.match(/en/gi));// returns an array [ 'en', 'en', 'en' ]


//Replacing: 
let str=Str.replace(/en/gi,' MjIslam ');
console.log(str);
//Testing
let reg=/MjIslam/gi;
console.log(reg.test(str));
