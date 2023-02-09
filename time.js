/****  Date and Time in JavaScript ****/
// JavaScript Date objects represent a single moment in time in a  platform-independent format. Date objects contain a Number 

// new Date() 
// Date objects are created with the new Date() constructor.

// let curDate=new Date()
// console.log(curDate)

//console.log(new Date().toLocaleString())

// perfect give local time
//console.log(new Date().toString())

// Date.now() 
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

//console.log(Date.now());


// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

let d = new Date(2023,2); // here we should minimus pass to arguments----
//console.log(d.toLocaleString());

//Dates Method

// const curDate = new Date();

// // how to get the indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// Time Methods

const curTime = new Date();

// how to get the indivisual Time 

//console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds 
// // since January 1, 1970
//console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a 
// // number (0-23)
//  console.log(curTime.getMinutes());
//  console.log(curTime.getSeconds());
//  console.log(curTime.getMilliseconds());


// // Practice Time 
// new Date().toLocaleTimeString(); // get only time
// //---
// new Date().toLocaleDateString(); //get only date
// //---
// new Date().toLocaleString(); // date and time
