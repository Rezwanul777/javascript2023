//What is a Switch Statement?  

//In programming, a switch statement is a control-flow statement that tests the value of an expression against multiple cases. 

// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number

//  var myPhoneNumber = 9876543210;
// var myName = "Rezwanul";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));
// if(isNaN(myName)){
//        console.log("plz enter valid phone no");
//    }
   
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.


// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }


//1. Grading system

// function myGrading(score){
//    let gscore;
//    switch (true) {
//       case (score<=100 && score>=80):
//          gscore='A+'
//          break;
//          case (score<=79 && score>=70):
//             gscore='A'
//             break;
//             case (score<=69 && score>=60):
//                gscore='B'
//                break;
//                case (score<=59 && score>=50):
//                   gscore='C'
//                   break;
//                   case (score<=49 ):
//                      gscore='F'
//                      break;
//       default:
//          return 'Invalid score'
//    }
//    return gscore
// }
// console.log(myGrading(20));
// console.log(myGrading(70));
// console.log(myGrading(180));


//Print the values multiply with the number with 8
// for(let num=1;num<=10;num++){
// let multiplyNumber =8;
//    console.log(multiplyNumber + '*' +num + "=" + multiplyNumber * num);
// }


// difference between function parameter and function argumnets?
//Ans:
// A list of parameters to the function, enclosed in parentheses and separated by commas. 
// Function arguments are the real values passed to the function.

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)


// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

  // A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

//Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

function sum(a,b){
   return total=a+b
}

const result=sum(10,15)
//console.log(result)

//"anonymous" function expressions.

const add=function(a,b){
   return total=a+b
}

//console.log(add(4,6))

// array length of index
//var myFriends = ['pri','rok','arj','vis'];

// console.log(myFriends[myFriends.length - 1]);

// for of for in loop
//const myFriends = ['pri','rok','arj','vis'];
// for(let elements in myFriends){
//    console.log(elements)

// }

const myFriends = ['pri','rok','arj','vis'];
for(let elements of myFriends){
   console.log(elements)

}

