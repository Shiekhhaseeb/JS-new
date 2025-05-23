const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
//falsy values
// 1.false, 0,-0, BigInt 0n ,"", null, undefined ,NaN

//truthy values
//"0" , 'false' ," ", [], {}, function(){}

//To check array is empty
// if (userEmail.length===0) {
// console.log("Array is empty");
// }

// To check object is empty
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
//Nullish coalescing operator (??) :null,undefined
//to AVOID Null/undefined values to add flags
// let val1=5 ?? 10;
/*********************** */
// console.log(val1);
// let val1;
//  val1=null ?? 10;

// console.log(val1);
/************************ */
// let val1;
// val1=undefined ?? 15;
// console.log(val1);
/************* */
let val1;
val1 = null ?? 10 ?? 20;
console.log(val1);

/*************************** */
//Ternary operator
// condition ? true ? false;
const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");
;
