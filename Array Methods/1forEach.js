// const numbers =[4,2,5,8];

// function myFunction(number,index) {
//     console.log(`index is ${index} number is ${number}`);
// }
/********* */
//or
// for (let i = 0; i < numbers.length; i++) {
// myFunction(numbers[i])
// }
/*********** */
// numbers.forEach(myFunction);

/************************/
// const numbers = [4, 2, 5, 8];
// numbers.forEach(function (number,index) {//using function inside .forEach
//     console.log(`index is ${index} number is ${number}`);
// });

/********************* */
// numbers.forEach(function (number) {
//   console.log(number * 2);
// });
/******************************** */
// const users =[
//     {firstName:"Harshit",age:23},
//     {firstName:"Mohit",age:21},
//     {firstName:"Nitish",age:22},
//     {firstName:"Garima",age:20},

// ]
// users.forEach(function(users){//as PARAMETER DALA,anamous function
//     console.log(users.firstName)//accessing elements of array since users is array of objects 
// });
/* users.forEach(users)
 :-This won’t work unless users is a function.
 */
/**************************************/
// const users =[
//     {firstName:"Harshit",age:23},
//     {firstName:"Mohit",age:21},
//     {firstName:"Nitish",age:22},
//     {firstName:"Garima",age:20},

// ]
// for(user of users){
//     console.log(user.firstName);//we can use for() also but .forEach() acts as extra function
    
// }
/***********Using arrow function (=>)***************/
const users =[
    {firstName:"Harshit",age:23},
    {firstName:"Mohit",age:21},
    {firstName:"Nitish",age:22},
    {firstName:"Garima",age:20},

]
users.forEach((user,index)=>{
    console.log(user.firstName,index);
    
})

