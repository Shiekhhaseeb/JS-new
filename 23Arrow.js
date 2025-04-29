// const user={
//     username:"hitesh",
//     price:999,
// //Method
// welcomeMessage:function() {
//     console.log(`${this.username},welcome to website `);//this means current context refers to current context(about what)
//     console.log(this);

// }
 
// }
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log();
/*****************************/
// const user={
//     username:"hitesh",
//     price:999,
// //Method
// welcomeMessage:function() {
//     console.log(`${this.username},welcome to website `);//this means current context refers to current context(about what)
//     console.log(this);

// }

// }

// console.log(this);//{},this is node environment

/******************* */
// function chai(){
//     console.log(this);
    
// }
// chai()
/**************** */
// function chai(){
//     let username ="hitesh"
//     console.log(this.username);//undefined,thus we cant use this in functions
    
// }
// chai()
/************************ */
// const chai=function(){
//     let username ="hitesh"
//     console.log(this.username);//undefined,thus we cant use this in functions
    
// }
// chai()
/******************************************* */
//Declare fxns using => fxns:----->
// const chai= ()=>{//fxn hatao arrow lagao
//     let username ="hitesh"
//     console.log(this.username);//undefined,thus we cant use this in  arrow function as well
//     console.log(this);//{}
// }
// chai()
/************************************ */
//ARROW FXN
//explicit return : use {}
// const addTwo =(num1 , num2) => {
//     return num1+ num2;
// }
// addTwo(3,4)
// console.log(addTwo(3,4));//7

/***************** */
// ARROW FXN using implicit return(me manleta hu ,ye return karega)
//used in react
// const addTwo =(num1 , num2) =>   (num1+ num2);

// console.log(addTwo(3,4));//7
//NOTE :-{} Curly braces use hua toh #return keyword use karna padega,agar () paranthesis use hua toh return karna is not necessary
/*****************************************/
const addTwo =(num1 , num2) =>   ({username:"hitesh"});//To return Object we have to wrap it in {} paranthesis

console.log(addTwo(3,4));

/***************** */
myArray=[2,5,3,7,8]
myArray.forEach();

