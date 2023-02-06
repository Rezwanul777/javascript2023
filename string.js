//String:A JavaScript string is zero or more characters written inside quotes.
//JavaScript strings are used for storing and manipulating text.

//How to find the length of a string?
let myName = "Rezwanul Haque";
//console.log(myName.length)

// Escape Character for double quote

 let anySentence = "We are the so-called \"Vikings\" from the north.";
 //console.log(anySentence);

 // Escape Character for single quote

 let singleSentence = "We are the so-called \'Vikings\' from the north.";
 //console.log(singleSentence);



               // Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

//const myBioData =  'I am the Full stack Developer';

//console.log(myBioData.indexOf("Full"));

// String.prototype.lastIndexOf(searchValue [, fromIndex]) 
 // Returns the index within the calling String object of the 
 // last occurrence of searchValue, or -1 if not found.


//  const myBioData =  'I am the Developer of Full stack Developer';
//  console.log(myBioData.lastIndexOf('Developer'))


               //Searching for a String in a String

// String.prototype.search(regexp) 
// The search() method searches a string for a specified 
// value and returns the position of the match.The search() method cannot take a second start position argument.

const myBioData =  'I am the  Full stack Developer';
const sData=myBioData.search("Developer")
//console.log(sData)


            //Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 
// slice() extracts a part of a string and returns the extracted part  in a new string.
// The method takes 2 parameters: the start position, 
// and the end position (end not included).
// The slice() method selects the elements starting at the given start argument, an  d ends at, but does not include,  the given end argument.


 var str = "Apple,Bananaa,Kiwi,mango";
 //let res = str.slice(0,4);
 let res = str.slice(0,5);
  //console.log(res);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 14);
//console.log(part)

//If you omit the second parameter, the method will slice out the rest of the string:
// let text1 = "Apple, Banana, Kiwi";
// let part1 = text.slice(7);
//console.log(part1)


//Display only 280 characters of a string like the one used in Twitter?
// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

//  let myActualTweet = myTweets.slice(0,280);
//  console.log(myActualTweet);
//  console.log(myActualTweet.length); 


             //JavaScript String substring()

//substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().

let substring="Apple, Banana, Kiwi";
//console.log(substring.substring(7,13))

//If you omit the second parameter, substring() will slice out the rest of the string.


            //JavaScript String substr()

//substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.


                     //Replacing String Content

//The replace() method replaces a specified value with another value in a string:
// The replace() method does not change the string it is called on. The replace() method returns a new string. The replace() method replaces only the first match.

// let Rtext = "Please visit Microsoft!";
// let newText = Rtext.replace("Microsoft", "W3Schools");
// console.log(newText)

//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

//To replace case insensitive, use a regular expression with an /i flag (insensitive):

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");
// console.log(newText)

//To replace all matches, use a regular expression with a /g flag (global match):

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");

// console.log(newText)

let text = "I love cats. Cats are very easy to love. Cats are very popular";
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
//console.log(text)

// The charAt() Method
// The charAt() method returns the character at a 
// specified index (position) in a string

// The charCodeAt() Method 
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

//// Return the Unicode of the last character in a string:

let text3 = "HELLO WORLD";
 let lastChar = text3.length - 1;
 console.log(text3.charCodeAt(lastChar));

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);



                 // The concat() Method 
// concat() joins two or more strings

// let fName = "rezwan"
// let lName = "haque"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);---- this is best practice
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));


// String.trim() -----very important
// The trim() method removes whitespace from both 
// sides of a string

let strTrim = "              Hello World!    ";
console.log(strTrim.trim());



// Converting a String to an Array----- important
// A string can be converted to an array with the 
// split() method

var txt = "a, b,c d,e";   // String
//console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
let text5 = "How are you doing today?";
// const myArray = text5.split(" ");
// let word = myArray[1];
// console.log(word)

//Use the limit parameter:

const myArray = text5.split(" ", 3);
//console.log(myArray)

         //JavaScript Array join()--- important
//The join() method returns an array as a string.The join() method does not change the original array.Any separator can be specified. The default is comma (,).

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let textJoin = fruits.join();
//console.log(textJoin)