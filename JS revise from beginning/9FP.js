//Functional Programming
/*****************************/
// ✅ Imperative vs Declarative Programming:
// const a =5;
// const aSquared = a*a;

// let iEven;
// if (aSquared %2 ==0) {
//     isEven =true;
// }
// else{
//     isEven=false;
// }
// console.log(isEven);//false 5*5 =25

/***********************************/
//Declarative way of writing code
//(what you want)
// const checkForSquare =(x) => (x *x %2 ===0 ?true:false);
// console.log(checkForSquare(4));
//better,shot and incresed efficiency

//✅ Rules for Pure Functions:
// Same input ➡ same output
//have no 🔥 Side Effects
// Side effects = Anything a function does outside itself.(change outer variable)
// var a =4;
// function add(x){
//     console.log(x + a);//a can be changed according to our will
// }
// add(2);
/***********************/
// var a =2;
// function add(x){
//     console.log(x + a);//a can be changed according to our will
//     a++;//changes outer variable
// }
// add(2);
// add(2);
// add(2);
// add(2);
//For same value of a i/p ,o/p was changing as outer variable is changing due to a++
//this make it impure
/*************************/
//pure Fxns
// function addPure(x,a){
//     console.log(x + a);
    
// }
// addPure(2,3)
// addPure(2,3)
// addPure(2,3)
// addPure(2,3)
//pure fxns has no side effects
/*************** */
//impure fxn
// var a =2;
// function addImpure(x){
//     console.log(x + a);//a can be changed according to our will
//     a++;//changes outer variable
// }
// addImpure(2);
// addImpure(2);
// addImpure(2);
// addImpure(2);
/*******************/
//🧼 A Function With No Side Effects (Pure Function)
/*✅ This function is pure:

No console log

No global variable changes

No API calls

It just returns a value */

// function add(a, b) {
//     return a + b;
// }
/*************************/
//fxns with side effects
// let total = 0;

// function addToTotal(a) {
//     total += a;               // ❌ modifies external variable
//     console.log(total);       // ❌ prints something (side effect)
// }
/******************************************************************************* */
//Call Back fxns:--> is fxn i.e passed as an argument to another fxn

// function PrintFirstName(firstname){
//     console.log(firstname);
    
// }
// PrintFirstName('steve')

// function PrintLastName(firstname){
//     console.log(firstname);
    
// }
// PrintFirstName('Rogers')
/*************************************************/
// function PrintFirstName(firstName,cb){
//     console.log("Roger");
// }
// PrintFirstName("Steve",PrintFirstName)

// function PrintLastName(lastName){
//     console.log(lastName);
// }

//or
// function PrintFirstName(firstName,cb){//argument
//     console.log(firstName);
//     cb('Roger');
// }

// function printLastName(lastName){
//     console.log(lastName);
// }

// PrintFirstName('Steve',printLastName);

/*********************************/
function PrintFirstName(firstName,cb){
    console.log(firstName);
    cb('Rogers');
}

function printLastName(lastName){
    console.log(lastName);
    
}
printLastName('Steve',printLastName);//callback