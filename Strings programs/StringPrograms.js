// QUESTION 1
//Write a program that can identify and return only the unique characters presented in a given string.The solution should handle the alphanumeric chaaracters, white spaces and special characters. It should also handle different string lengths effectively, and preserve the order of unique characters

// let Unique = "";
// let str = "aab ccde e!!# $%";

// for(i = 0 ; i<str.length ; i++){
//     let ch = str.charAt(i);
//     if(str.indexOf(ch) == str.lastIndexOf(ch)){
//        Unique += ch;
//     }
// }

// console.log(Unique);

// QUESTION 2
//Write a program that shows reapting characters in a string 
// function repeatletters(str){
//    let tempArr = str.split("");
//    let count = 1;
//    let letters = [];

//    for(i = 0; i<tempArr.length;i++){
//      if(tempArr[i] === tempArr[i + 1]){
//         count += 1;
//      }
//      else{
//         let value = `string ${tempArr[i]} : ${count}, `;
//         letters = [... letters,value];
//         count = 1; 
//      }
//    }

//     return letters.join("");
// }
// console.log(repeatletters("ddffiibai@@#$45666"));
