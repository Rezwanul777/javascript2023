//Array traversal

const myFriends = ['pri','rok','arj','vis'];

//myFriends.forEach((ele)=>console.log(ele))

//Searching and Filter in an Array 

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.

const prices = [200,300,350,400,450,500,600];

const findPrice=prices.findIndex((curValue)=>{
   return curValue>300
})
//console.log(findPrice)

// Array.prototype.indexOf() 

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number

const friends = ['pri','rok','arj','vis'];

//console.log(friends.indexOf("rok"))

// Array.prototype.lastIndexOf() 
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// Array.prototype.includes() 
// Determines whether the array contains a value, 
// returning true or false as appropriate.

const myCollesgues=['pri','rok','arj','vis']
//console.log(myCollesgues.includes("rok"))

//Array.prototype.filter() 

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

 const priceFood = [200,300,350,400,450,500,600];
 const newpriceTag=priceFood.filter((ele,index)=>ele>350)
 //console.log(newpriceTag)



 //Array.prototype.find()

 // arr.find(callback(element[, index,[ array]])[, thisArg])
 
 // Returns the found element in the array, if some element in the 
 // array satisfies the testing function, or undefined if not found.
 // Only problem is that it return only one element


 //Array.prototype.sort() 

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.



 //console.log(months.sort());

 //const array1 = [1, 30, 4, 21, 100000, 99];
 //console.log(array1.sort());

 // 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order 
const array1 = [1, 30, 4, 21, 100000, 99];

array1.sort(function(a,b){
    //console.log(a,b);
    if(a>b){
        return 1;
        // b comes first and then a 
    }
    if(a<b){
        // a comes first and then b 
        return -1;
    }
    if(a==b){
        // No changes
        return 0;
    }
});

//console.log(array1);

// for desecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);

// Array.prototype.push() 
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

 const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('chicken');
// console.log(animals);
// console.log(count);

// Array.prototype.unshift() 
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.
const animals2= ['pigs', 'goats', 'sheep'];
const countAnimal=animals2.unshift("cow")
//console.log(animals2)

// Array.prototype.pop() 
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

 const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


//Array.prototype.shift()
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// check above example

// Array.prototype.splice() 
// Adds and/or removes elements from an array.
//or----------------details




// ed.

// The splice() method returns an array with the deleted items: 

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?

// 4: Delete June from an array?

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const newMonths=months.splice(5,0,'Dec')
// The first parameter (5) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
//console.log(months)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//console.log(fruits)

const fruitsBog = ["Banana", "Orange", "Apple", "Mango"];
fruitsBog.splice(0, 1,'kola');
// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The last of the parameters are added his position as per indexing. 
//console.log(fruitsBog)

// Now If we dynamically  do the adding element with splice()

//const months = ['Jan', 'march', 'April', 'June', 'July'];
//const newMonths=months.splice(months.length,0,'Dec')
// here we use months.length that means we find array of length.that means we could not use index no.

//console.log(months)

// update data by splice()
// 3: update march to April (update)?

//const months = ['Jan', 'March', 'april', 'June', 'July']
// const updateMonth = months.splice(2,2,'April')
// console.log(months)

//now Dynamicaaly updated  with splice()
const months = ['Jan', 'March', 'april', 'June', 'July']

// const indexOfMonth=months.indexOf('april')
// if(indexOfMonth!==-1){
// const updateMonth = months.splice(indexOfMonth,1,'April')
// console.log(months)
// console.log(updateMonth)
// }else{
//    console.log('No such data found');
// }

//Delete month June from above array Dynamically

const indexOfMonth= months.indexOf('june')
if(indexOfMonth!==-1){
   const deleteMonth = months.splice(indexOfMonth,1) 
   console.log(months)
   console.log(deleteMonth)
}else{
   console.log('No such data found');
}

//The slice() method can take two arguments like slice(1, 3).

//The method then selects elements from the start argument, and up to (but not including) the end argument.
const sliceFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);






