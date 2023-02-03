//What is a Switch Statement?  

//In programming, a switch statement is a control-flow statement that tests the value of an expression against multiple cases. 

//1. Grading system

function myGrading(score){
   let gscore;
   switch (true) {
      case (score<=100 && score>=80):
         gscore='A+'
         break;
         case (score<=79 && score>=70):
            gscore='A'
            break;
            case (score<=69 && score>=60):
               gscore='B'
               break;
               case (score<=59 && score>=50):
                  gscore='C'
                  break;
                  case (score<=49 ):
                     gscore='F'
                     break;
      default:
         return 'Invalid score'
   }
   return gscore
}
console.log(myGrading(20));
console.log(myGrading(70));
console.log(myGrading(180));


//Print the values multiply with the number with 8
for(let num=1;num<=10;num++){
let multiplyNumber =8;
   console.log(multiplyNumber + '*' +num + "=" + multiplyNumber * num);
}


