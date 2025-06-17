// //Functions in js;-->
// //Declaring and Invoking function
// function demo(){
//     console.log("This is the function demo");
    
// }
// demo()
// function greet(){
//     console.log("Hello");
    
// }

// greet()
// //paremeters and Arguments:-->
// //fxn can be defined with a set of parameters that it will take,
// //parameters are generally the values that we want to 
// //Arguments are the values that we pass for those parameters

// function add(a,b){//Parameters(PA)
//     console.log(a+b);
    
// }
// add(1,2);//3; //Arguments
//we can call a function multiple times


/********** */
//Function Expression
//set of statements which gives us specific o/p
// var a =2+3;
// console.log(a);
// //In js we can make fxn in the form of Expression
// var add =function(){
//     console.log(a+b);
    
// }
// add(2,3);

//Anonmous function== Function jiska nam nahi hai
//like above fxn ,its stored in a variable

// var add= function(a,b){
//     return a+ b;
// }

// var result =add(3,4);
// console.log(result);

// //pass add to another variable:-->
// function greet(){
//     console.log('Hello');
    
// }
/*************************************/
//Fxn as Expression:-->
// var a = 2+3;
// console.log(a);

// //In js we can make fxn inform of Expression

// var add =function(a,b){
//     console.log(a+b);
    
// }
// add(2,3)

// //passs add to another variable

// var add =function(){
//       return a+b;
// }
// var sum =add;
// var result = sum(3,4);
// console.log(result);
/*****************************************/
// Arrow functions:--> shorthand of function ,here we use fat arrow (=>)

// let a = 2;
// let test1 =function(){
//     console.log(1);
    
// }
// let test2 =function(){
//     console.log(a+2);
    
// }
// let test3 =function(a,b){
//     console.log(a+b);
    
// }
// test1()
// test2(4)
// test3(2,6)
/*******************/
// let a = 2;
// let test1 = () =>{// function variable ke tarah behave karega
//     console.log(1);
    
// }
// let test2 = () =>{
//     console.log(a+2);
    
// }
// let test3 = (a,b) =>{
//     console.log(a+b);
    
// }
// test1()
// test2(4)
// test3(2,6)
/*************************/
//single line fxn
let test1 = () => console.log(1);
let test2 = a => console.log(a+2);
let test3 =(a,b) => console.log(a+b);

test1()
test2(4)
test3(2,6)

