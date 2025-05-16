//what is callback fxn in js?

// function x(){

// }
// x(function y(){// y is called callback fxn

// })
/**********************/
//for ASYNC tasks
// setTimeout(function (){
// console.log("timer");

// },5000);

// function x(y){
//     console.log("x");
// y();
// }
// x(function y(){
//     console.log("y");

// })
/***************** */
//Deep about Event Listeners:-->
// document.getElementById("clickMe").addEventListener("click",function xyz(){//CALLBACK FUNCTION
//     console.log("Button Clicked");
// });
/*********************** */
// closure demo with event listeners

// let count =0;
// document.getElementById("clickMe").addEventListener("click",function xyz(){//CALLBACK FUNCTION
//     console.log("Button Clicked",++count);
// });
//but using a global variable is not the good way
//we use closures for data hiding
//wrap this whole thing inside a #function
/**************** */
// scope demo with event listeners
/************** */
function attachEventListener() {
let count =0;
document.getElementById("clickMe")
.addEventListener("click",function xyz(){//CALLBACK FUNCTION
    console.log("Button Clicked",++count);
});
}
attachEventListener();
//Garbage collection & removeEventListeners