"use strict";

const arr = [1, 2, 3, 6, 8];

// arr.pop(); //delete lsat element


// arr.push(10); // add new element to the end

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);

// }

console.log(arr.length);

//arr[99] = 0;

// console.log(arr[5]);
// let count = 0;
// for (let value of arr){
//  if(value != undefined){
//      count++;
//  }
// }
// console.log(count);

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} in the array ${arr}`);
});

 function copyObj(mainObj){
     let objCopy = {};

     let key;
     for (key in mainObj){
         objCopy[key] = mainObj[key];
     }

     return objCopy;
 }

 const numbers = {
     a: 2,
     b: 5,
     c: {
         x: 7,
         y: 4
     }
 };

 const newNumb = copyObj(numbers);

 newNumb.a = 10;
 console.log(numbers);
 console.log(newNumb);

const newObg = {...numbers};
newObg.a = "a";
console.log(numbers);
console.log(newObg);