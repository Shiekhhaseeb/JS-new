//Understand callback
//using synchronous function
// function myFunc(){
//     console.log("Function is doning some task");

// }
// myFunc();
/************** */
// function myFunc(){
//     console.log("Function1 is doning task1");

// }
// function myFunc2(){
//     console.log("Function2 is doning task2");

// }
// myFunc();
// myFunc2();
/******************** */
//take fxn as call back
// function myFunc(callback){//take call back
//     console.log("Function1 is doning task1");
//     callback()
// }
// function myFunc2(){
//     console.log("Function2 is doning task2");

// }
// myFunc(myFunc2());
/******************* */
// function myFunc(callback){//take call back
//     console.log("Function1 is doning task1");
//     callback()
// }

//  myFunc(function(){//anamolous fxn
//     console.log("Function2 is doning task2");
//  })
/******************** */
//using arrow fxns:-->

// function myFunc(callback){//take call back
//     console.log("Function1 is doning task1");
//     callback()
// }

//  myFunc(()=>{//using arrow fxns
//     console.log("Function2 is doning task2");
//  })

/******************** */
//  function getTwoNumbers(number1,number2){
// console.log(number1,number2);

//  }
//  getTwoNumbers(4,5)//4 5
/*************************** */
// function getTwoNumbersAndAdd(number1, number2,callback) {
//   console.log(number1, number2);
//   callback(number1,number2);
// }

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// getTwoNumbersAndAdd(4, 5, addTwoNumbers); //4 5 9
/****************************/
//if we want to call ""strings then we need or need only numbers then we use conditon

// function getTwoNumbersAndAdd(number1, number2,callback) {
//     if (typeof number1 === "number" && typeof number2 ==="number") {
//           callback(number1,number2);
//     }
//     else{
//         console.log("Wrong data Type");

//     }
// }

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// getTwoNumbersAndAdd(4,5,addTwoNumbers); //9
/**************************** */
//Sometimes we need to call 2 callback fxns:-->(during : success ,error)
// function getTwoNumbersAndAdd(number1, number2,callback) {
//     if (typeof number1 === "number" && typeof number2 ==="number") {
//           callback(number1,number2);
//     }
//     else{
//         console.log("Wrong data Type");

//     }
// }

// // function addTwoNumbers(num1, num2) {
// //   console.log(num1 + num2);
// // }

// //or :- we can call like this:-->
// //check here::--->

// getTwoNumbersAndAdd(4,5,(num1,num2)=>{
//     console.log(num1+ num2);

// });
/**************************** */
//callback=onsuccess
//fail =onFailure
// function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     onSuccess(number1, number2);
//   } else {
//     onFailure();
//   }
// }

// getTwoNumbersAndAdd( "4", 4,(num1, num2) => {
//     console.log(num1 + num2);
//   },() => {
//     console.log("Wrong data Type");
//     console.log("Please Type numbers only");
//   }
// );
/**************** */
// function abc(num){
//    num()
// }
// function def(){
//   console.log("Hello world");
  
// }
// // console.log(abc("kamran"));
// // console.log(abc(1));
// abc(def)
/************************* */
//Other way:-->
function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
    
}
function onFailure(){
    console.log("Wrong data Type");
    console.log("Please Type numbers only");
}
getTwoNumbersAndAdd( "4", 4,addTwoNumbers,onFailure)
   
