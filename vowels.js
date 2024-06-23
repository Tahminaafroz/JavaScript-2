//Q.Write a function that counts the number of vowels (a, e, i, o, u) in a given string. 
// const sentence="I live in NewYork"
// function countvowels(inputStr){
//    let inputStringLowercase=inputStr.toLowerCase();
//    //console.log(inputStringLowercase);
// let vowelCount=0;
// for( let i=0; i<inputStringLowercase.length;i++){
//     if (inputStringLowercase[i] === 'a' || inputStringLowercase[i] === 'e' || inputStringLowercase[i] === 'i' || inputStringLowercase[i] === 'o' || inputStringLowercase[i] === 'u') {
//         // If it is, increment the vowel count
//         vowelCount++;
//     }    
// }return vowelCount;

// }
// console.log(countvowels(sentence));
//Q.Write a function that capitalizes the first letter of each word in a string. 
function capitalizeFirstLetters(inputString) {
    let words = inputString.split(' ');
    //console.log(words);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let capitalizedString = words.join(' ');

    return capitalizedString;
}

let inputStr = "hello world! this is a test.";
console.log(capitalizeFirstLetters(inputStr)); 




//Given the string const str = "JavaScript is awesome!";, use the slice method to extract the substring "Script".

// const str = "JavaScript is awesome!";
// let slicedStr=str.slice(4,10);
//console.log(slicedStr);
//Given the array const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];, how would you use the slice method to create an array [6, 7, 8]?
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sliceArr=arr.slice(5,8);
// console.log(sliceArr);