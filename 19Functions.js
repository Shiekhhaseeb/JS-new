// function sayMyname(){

// console.log("H");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");
// console.log("h");

// }

// sayMyname();
/**H
i
t
e
s
h */

/****************** */

// function addTwoNumbers(number1, number2) {//fxxn def= PARAMETERS
//   console.log(number1 + number2);
// }
// //ARFUMENTS
// // addTwoNumbers(); //NaN =kyonki koi agrument diya he na
// // addTwoNumbers(3, 4); //7
// // addTwoNumbers(3, "4"); //34,concatinates
// // addTwoNumbers(3, "a"); //3a
// // addTwoNumbers(3, null); //3

// const result= addTwoNumbers(3,5);
// console.log("Result",result);//Result:undefined

/*********************************** */

function addTwoNumbers(number1, number2) {
  //fxxn def= PARAMETERS
  // let result =number1+ number2;
  // return result;// result ke baad kuch bhi print nahi hota hai
  // console.log("Result",result);
  //or, other way of returning
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
//   console.log("Result",result);//Result:undefined

/**************** */

// function isLoggedInMessage(username) {
//  return `${username} just logged in`
// }
// isLoggedInMessage("hitesh")// call hoga print nahi hoga
// console.log(isLoggedInMessage("hitesh"));
// console.log(isLoggedInMessage(""));// just logged in
// console.log(isLoggedInMessage());//undefined just logged in

/************** ***************/
// function isLoggedInMessage(username) {
//     if (username===undefined) {
//         console.log('Please enter a username');
//         return;// return ke baad koi bhi code nahi chalega
//     }
//     return `${username} just logged in`
//    }
//    isLoggedInMessage("hitesh")// call hoga print nahi hoga
//    console.log(isLoggedInMessage("hitesh"));
//    console.log(isLoggedInMessage(""));// just logged in
//    console.log(isLoggedInMessage());//undefined just logged in
/********************************************* */
// function isLoggedInMessage(username) {
//     if (!username) {//! = username===undefined
//         console.log('Please enter a username');
//         return;// return ke baad koi bhi code nahi chalega
//     }
//     return `${username} just logged in`
//    }
//    isLoggedInMessage("hitesh")// call hoga print nahi hoga
//    console.log(isLoggedInMessage("hitesh"));
//    console.log(isLoggedInMessage(""));// just logged in
//    console.log(isLoggedInMessage());//undefined just logged in
/************* */
function isLoggedInMessage(username = "sam") {
  //default value
  if (!username) {
    //Ab hum is block me kabhi jayenge he nahi
    console.log("Please enter a username");
    return; // return ke baad koi bhi code nahi chalega
  }
  return `${username} just logged in`;
}
console.log(isLoggedInMessage("hitesh")); //"sam" yaha override hoga "hitesh" se

//output----> hitesh just logged in