let now = new Date();
console.log(now);//2023-08-05T07:39:43.780Z
let epochTime=new Date(0);
console.log(epochTime);
// 1970-01-01T00:00:00.000Z

// Argument passed to date constructor is number of milliseconds elapsed since epoch time
console.log(new Date(1000000000000));
//2001-09-09T01:46:40.000Z
//-ve value indicates number of milliseconds before epoch time
console.log(new Date(-1000000000000));
//1938-04-24T22:13:20.000Z
//Date constructor: Date(year,month,date,hour,munutes,seconds,milliseconds)
let myDate=new Date(1991,9,12,8,31,5,2);
console.log(myDate);
//1991-10-12T03:01:05.002Z
console.log(myDate.getFullYear());
// 1991
console.log(myDate.getMonth());
// 9
console.log(myDate.getDate());
// 12
console.log(myDate.getDay());
// 6
console.log(myDate.getHours());
// 8
console.log(myDate.getMinutes());
// 31
console.log(myDate.getSeconds());
// 5
console.log(myDate.getMilliseconds());
// 2
console.log(myDate.getUTCHours());
// 3
console.log(myDate.getTime());
//687236465002
let altDate=new Date(2013,0,32);
console.log(altDate);
//2013-01-31T18:30:00.000Z