// {
//     //block / compound statement: combines multiple statements defined by ={}
//     //compound statement
//     var a =10;
//     console.log(a);

// }
/****************** */
//block:-->
// if (true) {
//     //compound statement
//      var a =10;
//     console.log(a);
// }
/**************** */
//Block scope;--> what all variables and fxns we can access inside this block

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log(a);//10
//   console.log(b);//20
//   console.log(c);//30
// }

// console.log(a);//10 ,use debugger here and above log statement
// console.log(b);
// console.log(c);

/************************ */
/*********** */

/*********** ************/
//Whats shadowing in JS:-->

/***************************/
//1.var:-->

// var a =100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log(a);//10
//   console.log(b);//20
//   console.log(c);//30
// }
//   console.log(a);//10
/****************** */
//2.let:-->

// let b =100;//script = outside scope
// {
//   var a = 10;
//   let b = 20;//shadowing
//   const c = 30;

//   console.log(a);//10
//   console.log(b);//20
//   console.log(c);//30
// }
//   console.log(b);//100
/********************* */
//3.const:-->

// const c =100;//script = outside scope
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;//shadowing

//   console.log(a);//10
//   console.log(b);//20
//   console.log(c);//30
// }
//   console.log(c);//100
/********************* */
//4.In Functions:-->
// var c =100;
// function x()
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;//shadowing

//   console.log(a);//10
//   console.log(b);//20
//   console.log(c);//30

// }
// x();
// console.log(c);//100
//behaves in the same way
//o/p:-->
// 10
// 20
// 30
// 100
/************* */
//illegal shadowing
// let a =20;
// {
//     var a =20//a is already decleared
// }
/************************ */
//it works
// let a =20
// { 
//     let a=20

// }
/********************** */
//it works

// var c =100;
// {
//     let a=20
// }
/************ */
// //

// let a =20;
// function x(){
//     var a =20; //var is not interfering with a outside
// }
//BLOCK scope is Lexical scope
const a = 20;
{
    const a =100;
    {
       const a =200;
       console.log(a);//200
       
    }
    console.log(a);//100
}
console.log(a);//20
/************* */
//all scopes are same as Arrow fxn= fxns