//CLOSURES:-->
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//      y();

// }
// x()//7 this is what closure is
/******************************* */
//we can pass fxn into another fxn
// function x(){
//     var a=7;

//      y();

// }
// x(    function y(){
//         console.log(a);
//     })
/********************************* */
//we can return  a fxn also
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//      return y;

// }
// var z =x();
// console.log(z);
// z()
/************ */
//we can also return fxn in the beginning
// function x(){
//     var a=7;
//     return function y(){
//         console.log(a);
//     }

// }
// var z =x();
// console.log(z);
// z()
/****************** */
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//      return y;
// }
// var z =x();
// console.log(z);
// //.....................
// z();
/***************** */
// function z() {
//   var b = 900;

//   function x() {

//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();

//   }
//   x();
// }
// z();
//check debugger ,y forms a closure with x and z
//closure = Fxn along with its scope
/******************************** */
//Common uses of closures:-->
// module design pattern
// Currying
// Fxn like once
// memoiz
// maintain state in async world
// setTimeout
// iTERATIONS
// and many more...