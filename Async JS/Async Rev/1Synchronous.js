//line by line exe takes place in synchronous:-->

//Synchronous JavaScript refers to code that runs in sequence, one line at a time. Each operation must complete before the next one starts.
// console.log("start");
// alert("This is alert")
// console.log("End");

/**Characteristics of Synchronous JavaScript:
Blocking: If one operation takes time (e.g., reading a large file), it blocks everything else.

Predictable order: Code runs exactly in the order it's written.

This is different from asynchronous JavaScript, where long-running tasks (like API calls or timers) don't block the rest of the code. */

//🟨 Synchronous Example
// console.log("1: start");

// function syncTask() {
//     console.log("2:Doing sync task");
// }
// syncTask();

// console.log("3:End");
//output:-->
/**1: Start
2: Doing sync task
3: End */




//🟨 Asynchronous js: JS comes with API i.e why we have to make js Async i.e use timeout fxns 
//we can use these in console 
//console>window
/**************************************** */
/**
 * setInterval (): bar bar chalega :check this in console:--
 * /************************************ */
 /*
 * setInterval(function () {
  console.log("2:This is Async taks");
}, 2000);
 */
/***************************** */
//while as 
//setTimeout() :--> sirf 1 bar chalega.
//🟨 Asynchronous Example
// console.log("1:Start");

// setTimeout(function () {
//   console.log("2:This is Async taks");
// }, 2000); //This will execute after 2 seconds

// console.log("3:End");
/**1:Start
3:End
2:This is Async taks */
/**************************** */
//using arrow function:-->
// console.log("1:Start");
// setTimeout(()=>{
//     console.log("2:This is Async js code here");

// },2000)

// console.log("3:End");
/************sirf 1 bar chalega******************** */
// const sayHaseeb =function(){
//     console.log("Haseeb");
    
// }
// setTimeout(sayHaseeb, 2000);
/************bar bar chalega*********************** */
// const sayHaseeb =function(){
//     console.log("Haseeb");
    
// }
// setInterval(sayHaseeb, 2000);

/****************************** */
//Let’s now learn how to stop both setTimeout and setInterval using clearTimeout() and clearInterval().

// const sayHaseeb =function(){
//     console.log("Haseeb after 2 seconds");
    
// }
// const timeoutId= setTimeout(sayHaseeb, 1000);
// //using ClearTimeout() with setTimeout
// clearTimeout(timeoutId);
// console.log("Timeout cancelled before ot could run");
/************************ */
function sayHaseeb() {
    console.log("Haseeb");
    
}
const intervalId = setInterval(sayHaseeb,2000)
setTimeout(()=>{
    clearInterval(intervalId)
    console.log("Interva; cleared.No more Haseeb present in log");
    
},7000)

/*************** */
const timeoutId = setTimeout(() => {
  console.log("This timeout will not run if cancelled.");
}, 3000);

// Cancel the timeout after 1 second
setTimeout(() => {
  clearTimeout(timeoutId);
  console.log("Timeout cancelled!");
}, 1000);
