"use strict!";

// let userName = prompt("type your name");
// let userAge = prompt("type your age");
// let userLicense = prompt("type your license status");

// let result;

// while (Number.isNaN(userAge)){
//     console.log(`userage must be a number`);
//     userAge = prompt(`your age`);
// }
// while (!userName.trim()){
//     console.log(`userage is required`);
//     userName = prompt(`your name`);
// }
// while (userLicense != "true" && userLicense != "false"){
//     console.log(`Have license must be a boolean (true/false)`);
//     userLicense = prompt(`has license (true/false)`);
// }
// userLicense = (userLicense == 'true') ? true : false;

// result = `hello ${userName}! Your age is: ${userAge}. Can you drive: ${userLicense}`;

// console.log(result);


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }



// let i = 1;
// while (i <= 10) {
//     console.log(++i);
// }



// let i = 1;
// do {
//     console.log(++i);
// } while (i<=9);



// let arr = []
// let arr2 = arr.map(value => value +1)
// let arr3 = arr.filter(item => (item%2));
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }

// arr.forEach((value) => console.log(value));

// console.log(arr);
// console.log(arr2);
// console.log(arr3);



// let arr = []
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// for (let val in arr) {
//     console.log(`value ${arr[val]}; index: ${val}`);
// }



// let arr = []
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// const obj={
//     name: "Rokas",
//     age: 18,
//     hasLicense: true
// }

// for (let val in obj) {
//     console.log(`value ${obj[val]}; index: ${val}`);
// }
// for (let element of arr){
//     console.log(element);
    
// }



const heading = document.querySelector(`h1`);
heading.textContent = 'H1H1';
const newH1 = document.createElement('h1');
newH1.textContent = 'newH1H1';
document.body.appendChild(newH1);

console.log(heading);
