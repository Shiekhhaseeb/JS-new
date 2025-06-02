//this keyword :-->

//this in global space

//this inside a function

//this in strict mode -(this substition)

//this value depends on how this is called(window)

//this inside a object's method

// call apply bind methods(sharing methods)

//this inside arrow function

//this inside nested arrow function

//this inside DOM

/************************** */
"use strict";
//1.this in global space
console.log(this);
//2.this inside a function
function x() {
  //the value of fxn  depends on strict/non-strict mode
  console.log(this);
}
// x();

//NOTE :-->//this inside non-strict mode -{this substitution}=whenever the value of this keyword is undefined or null it becomes the global object

//if the value of this keyword is  undefined or null this keyword will be replaced with global object only in non-strict mode

//this value depends on how the fxn is called(window)
x(); // call it without reference :--> undefined
window.x(); //this is now calling object--> (window object)

//********** */
//3.this inside a object's method
// const obj={
//     a : 10,
//     x :function (){// x is an method of object (obj)
// console.log(this);

//     }
// }
// ///this value depends on how the fxn is called
// obj.x()
/*************** */
// const obj={
//     a : 10,
//     x :function (){// x is an method of object (obj)
// console.log(this.a);//10,this means obj and a means
// //  10

//     }
// }
// ///this value depends on how the fxn is called
// obj.x()
/************* */
// call apply bind methods(sharing methods)
const student={
 name : "Akshay",
 printName : function(){
    console.log(this.name);
    
 }
}

///this value depends on how the fxn is called
student.printName()


const student2={
name : "Deepika"
 
    }
student.printName.call(student2);//value of this is student2 or what eveer we pass here will become the value of this keyword
//student.printName.call = takes value of this inside it (.call) ,the value of this becomes what we pass in the (),here we are trying to override the values

/*********************** */
//This inside arrow function :-->

// const obj={
//   a: 10,
// x : function(){
//   console.log(this);//this = obj
// },

// };
// obj.x();
/********** */
//This inside arrow function :-->
const obj={
  a: 10,
x : () => {
  console.log(this);//this ,value will be window obj ,it will take global space
},
};
obj.x();
/*************** */
//this inside nested arrow function:-->

// const obj2 = {
// a: 10,
// x : function(){
//   const y =()=>{
//   console.log(this);

//   };
//   y();
//  },
// };
// obj2.x();
/***************************/
//IT BEHAVES LIKE:-->

// const obj2 = {
// a: 20,
// x : function(){
//    console.log(this);
   
//   // const y =()=>{
//   // console.log(this);

//   // };
//   // y();
//  },
// };
// obj2.x();
/****************** */
const obj2 = {
a: 20,
x : function(){
   console.log(this);
   //enclosing lexical context
  const y =()=>{
  console.log(this);
  };
  y();
 },
};
obj2.x();

//this inside DOM
// write this in html
    // <button onclick="alert(this)">Click Me</button>
 

//o/p:-->
//[object HTMLButtonElement]

//inside DOM element the value is reference to HTMLelement 
/***********************/
    // <button onclick="alert(this.tagName)">Click Me</button>
//o/p:--> BUTTON
/***********************/
// THIS INSIDE class,constructors
/***********************/
