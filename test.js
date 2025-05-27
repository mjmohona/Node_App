// <-------------------- Arrow Function ---------------->

// const test = (num) => "Hello" + num;
// const test = (num) => {
//     console.log("Hello" + num);
// }

// <-------------------- Import Export -------------->
//test.js page
// const test = () => {
//     console.log("test");
// }

// app.js page

// export test;
// import {test} from './test';


// export default test;
// import sjhgh from './test';
// sjhgh();


//export const p =2;
// import {p} from './test';


// <-------------------- spread operator ---------------->
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers); // [1, 2, 3, 4, 5, 6]


// <-------------------- rest operator ---------------->
// const learn = (...args) =>{
//     console.log(args);
// }
// learn("JavaScript", "Python", "Java", "C++"); // ["JavaScript", "Python", "Java", "C++"] return as array


// <-------------------- Destructuring ---------------->
// const course = {
//     name: "ReactJS crash course",
//     detail:{
//         duration: "3 months",
//         price: "200 TK",
//         topics: ["Variables", "Functions", "Objects"]
//     }
// };
//
// // const {name} = course;
// const {name, detail: {price} ={}} = course;
// console.log(name, price);


// <-------------------- Array Method ------------------>
//filter method----->
// const numbers = [1, 2, 3, 4, 5];
// const filter = numbers.filter((num) => num > 2);
// console.log(filter);  // Output: [3, 4, 5]
// console.log(numbers);   //filter method does not change the original array

//find, findIndex method----->
// const numbers = [1, 2, 3, 4, 5];
// const find = numbers.find((num) => num > 2);
// const findIndex = numbers.findIndex((num) => num > 2);
// console.log(find);   // Output: [3]
// console.log(findIndex); // Output: 2

//slice method----->
// const numbers = [1, 2, 3, 4, 5];
// const slice = numbers.slice(2,4);
// console.log(slice); // Output: [3, 4]
