 
  const myName="Tahmina";
  console.log(myName.charAt(3));  //charAt method//output:i. (follow index theory)

//  let myString= "hello, world!"
//  //console.log(myString. toUpperCase());

//  let myString="HELLO, WORLD!"
//  console.log(myString. toLowerCase());//hello world!

// const text= "Hello World!"
//  console.log(text.slice(0)); 
//Hello World! or(0,5) for Hello or(6,11) for World! or (3,8) for lo Wo [space number 5 cannot be count]

// const text="Hello World"
//  console.group(text.slice(-3));//last three letters will be print "rld"


// const studentName="Muhammad Hasan";
//  console.log(studentName.substring(0,8));// starting number ,ending number will be count 
// output:Muhammad


// const text="Hello World"
// console.log(text.slice(5)); //start from number 5 and "world" will be print



// const text="Hello world!";
//   console.log(text.slice(3,8));//starting number ,ending number space will not be count on slice
//   for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ",text2);
// console.log(text3);  //Hello World!

//  let text = "We are learning JavaScript";
//  let length = text.length;
 //console.log(length);//26let 
// text1 = "Hello World!";
// let text1 = "Hello World!";
// const sentence="We are learning JavaScript"
// console.log(sentence.indexOf("JavaScript"));
// 16
 let greetings="Hello, World";
console.log(greetings.replace("World","JavaScript"));
//Hello JavaScript

//Shohaib Hossain says:Given the string const str = "JavaScript is awesome!";, use the slice method to extract the substring "Scr

// let myName = "Tahmina";

// function reverseString(str) {
//     let splitString = str.split("");
//     let reverseArr = splitString.reverse()
//     let reverseStr = reverseArr.join("");
//     return reverseStr
// }
//console.log(reverseString(myName));
//Q.Write a function that takes a string as input and returns the string reversed. 

// function reverseWords(sentence){
//      const words=sentence.split('').reverse('');
//      const reversedSentence=words.join('');
//         return reversedSentence;
//      }
// const inputSentence="Hello,World";
// const reversedSentence=reverseWords(inputSentence);
// console.log(reversedSentence);//output:  !dlroW,olleH

//Q.Write a function that counts the number of vowels (a, e, i, o, u) in a given string. 
// function  countVowels(inputStr){
//  const vowels=['a','e','i','o',u];
//  let count=0;
//  for(let char of inputStr.tolowerCase()){
 
// if(vowels.includes(char)){
//     count++;
// }
// }
//  return count;
// }
// const text="Hello,World";
// const vowelcount=countVowels(text);
// console.log("vowelcount");
// //Q.Write a function that capitalizes the first letter of each word in a string. 
// function toTitleCase(str) {
//     const words = str.toLowerCase().split(' ');
//     const titleCaseWords = words.map(word => word.charAt(0)toUpperCase() + word.slice(1));
//     const titleCaseStr = titleCaseWords.join(' ');
//     return titleCaseStr;
// }
          
// const inputStr = "hello, world!";
// const titleCaseStr = toTitleCase(inputStr);
// console.log(titleCaseStr);