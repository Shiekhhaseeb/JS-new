//Array Methods.
// //1.map()

// const numbers =[4,2,5,8]
// function myFunction(number,index){
//     console.log(`index is ${index} number is ${number}`);
    
// }
// //     // myFunction(4,0);

// //     //    myFunction(numbers);

// for (let i = 0; i < numbers.length; i++) {
//     myFunction(numbers[i], i);
// }

//        numbers.forEach(myFunction);
/************************** */
// const numbers =[4,2,5,8]
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} numbers is ${number}`);
    
// })
/****************************/
// const numbers =[4,2,5,8]
// numbers.forEach(function(numbers){
//     console.log(numbers*2);
    
// })
/****************************/

// const users =[
//     {firstName:"Harshit",age:23},
//     {firstName:"Mohit",age:21},
//     {firstName:"Nitish",age:22},
//     {firstName:"Garima",age:20},

// ]
// // users.forEach(function(users){
// //     console.log(users.firstName);
    
// // });
//2. for of () :-->
// // for (let user of users) {
// //   console.log(`Name: ${user.firstName}, Age: ${user.age}`);
// // }

// /*************************/
// const users =[
//     {firstName:"Harshit",age:23},
//     {firstName:"Mohit",age:21},
//     {firstName:"Nitish",age:22},
//     {firstName:"Garima",age:20},

// ]
// users.forEach((user,index)=>{
//     console.log(user.firstName,index);
    
// })

/*********************************/
//3.map(): //make an new array
// const numbers=[3,4,6,1,8];
// const square =function(number){
//     return (number*number)
// }
// const squaredNumber=numbers.map(square)
// console.log(squaredNumber);
/**************************************/
//using arrow function:-
// const numbers=[3,4,6,1,8];
// const squaredNumber=numbers.map((number)=>{
//     return `index:${index} ${nummber*number}`
// });
// console.log(squaredNumber);
// //.map() gives us array and in return we will store that array in const(variable)
/***********************************/
//4.filter():-->
//filter function /method also returns return as call back value
//Filter is also stored in new Array
//Its call back fxn return Boolean (true/false)
// /********************************/
// const a = [1, 3, 2, 6, 4, 8];

// const isEven = function(b) {
//     return b % 2 === 0; // true for even numbers
// };

// const evenNumbers = a.filter(isEven);

// console.log(evenNumbers);  // [2, 6, 4, 8]

/********************************/
// const a =[1,3,2,6,4,8]

// const isOdd =function(b){//b is each number from the array.
//     return b%2!==0;
// }
// const oddNumbers=a.filter(isOdd);

// console.log(oddNumbers);
/**************************/
//using arrow functions
const a =[1,3,2,6,4,8]
const evenNumbers =a.filter((number)=>{
    return number %2 ===0;
});
console.log(evenNumbers);
