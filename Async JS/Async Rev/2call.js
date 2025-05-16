//callback-demo.html(1:00:07)
//callback,callback hell,pyramid of doom
//async program
/**************************** */
//Define your variables first
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//   //input lega or delay lega
//   heading1.textContent= "Heading 1"
//   heading1.style.color= "violet";
// }, 1000);

// setTimeout(() => {
//   //input lega or delay lega
//   heading2.textContent= "Heading 2"
//   heading2.style.color= "purple";
// }, 1000);
/*************** */
//if we wanna change color of 1 w.r.t another
// setTimeout(() => {
//   //input lega or delay lega
//   heading1.textContent= "Heading 1"
//   heading1.style.color= "violet";
//   setTimeout(() => {
//   heading2.textContent= "Heading 2"
//   heading2.style.color= "red";
// }, 1000);
// }, 1000);
/*************************** */
/////h/W

//this is call back hell:its sometimes confusing
// setTimeout(() => {
//   //input lega or delay lega
//   heading1.textContent= "one"
//   heading1.style.color= "violet";
//   setTimeout(() => {
//   heading2.textContent= "Two"
//   heading2.style.color= "purple";
//     setTimeout(() => {
//   heading3.textContent= "Three"
//   heading3.style.color= "red";
//     setTimeout(() => {
//   heading4.textContent= "Four"
//   heading4.style.color= "pink";
//     setTimeout(() => {
//   heading5.textContent= "Five"
//   heading5.style.color= "green";
//     setTimeout(() => {
//   heading6.textContent= "Six"
//   heading6.style.color= "blue";
//     setTimeout(() => {
//   heading7.textContent= "Seven"
//   heading7.style.color= "brown";
// }, 1000);
// }, 3000);
// }, 2000);
// }, 1000);

// }, 2000);
// }, 2000);
// }, 1000);
/***************************/
//do the same thing using functions:-->
//open dev tools:--> ctrl +shift + J
// function changeText(element, text ,color ,time){
//   setTimeout(()=>{
//     element.textContent=text;
//     element.style.color =color;
//   },time)
// }
// changeText(heading1,"one","violet",3000)
/****************************/
// function changeText(element, text ,color ,time,onSuccessCallback,onFailureCallback){
//   setTimeout(()=>{
//     if (element) {
//     element.textContent=text;
//     element.style.color =color;
//     if (onSuccessCallback) {
//       onSuccessCallback();
//     }
//     }
//     else{
//       console.log("Your element does not exist");
//     }
//   },time)
// }
// changeText(heading1,"one","violet",2000,()=>{
//   changeText(heading2,"two","green",1000)
// })
/******************* */
// function changeText(element, text ,color ,time,onSuccessCallback,onFailureCallback){
//   setTimeout(()=>{
//     if (element) {
//     element.textContent=text;
//     element.style.color =color;
//     if (onSuccessCallback) {
//       onSuccessCallback();
//     }
//     }
//     else{
//       if (onFailureCallback) {
//         onFailureCallback()
//       }
//     }
//   },time)
// }
// changeText(heading1,"one","violet",2000,()=>{
//   changeText(heading2,"two","green",1000)
// })
/************************ */
function changeText(element, text ,color ,time,onSuccessCallback,onFailureCallback){
  setTimeout(()=>{
    if (element) {
    element.textContent=text;
    element.style.color =color;
    if (onSuccessCallback) {
      onSuccessCallback();
    }
    }
    else{
      if (onFailureCallback) {
        onFailureCallback()
      }
    }
  },time)
}
changeText(heading1,"one","green",1000,()=>{
  console.log("hello world")
},()=>{console.log("Heading1 does not exist")})