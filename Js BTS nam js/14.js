// //1.Function Statement
// function a(){
//     console.log("a called");
    
// }
// a();

// //2.Function expression
// var b =function(){
//     console.log("b called");
    
// }
// b();

/********************** */
//In Function Statement= simple function declaration

//IN FXN expression = giving fxn to a variable is called FXN expression

//The actual diff b/w 1 and 2 is "HOISTING" :-->
//1.Function Statement
// a();
// b();
// function a(){
//     console.log("a called");
    
// }


// //2.Function expression
// var b =function(){
//     console.log("b called");
    
// }
// b();
// b me error aayega as its stored in variable,'hOISTING ME GADBADD'
/********************** */

//3.Function Declaration IS same as 1.Function Statement

// function a(){
//     console.log("a called");
    
// }
// a();
/***************************** */
//4.Anonmyous Function 
// function (){

// }
/************************* */
//Named Functions Expression:--> its same as fxn expression and 
// but here we give name to a anonymous fxn

// function a(){
//     console.log("a called");
// }


// //2.Function expression
// var b =function xyz(){ //giving name to anonymous fxn is called Named Functions Expression
//     console.log("b called");
//     console.log(xyz);
    
// }

// a();
// b();
// xyz();// xyz is not defined

//5. Difference between Parameters and Arguments ?
// function a(){
//     console.log("a called");
// }


// //2.Function expression
// var b =function(param1,param2){  //jo fxn me pass hota hai,
//     console.log("b called");
    
// } 

// a();
// b(1,2);//a 
//6.  First class Functions/First class citizens -ability to be used like values
// function a(){
//     console.log("a called");
// }
// //2.Function expression
// var b =function(param1){  //jo fxn me pass hota hai,
//     return function(){

//     }
// function xyz(){

// }    
// } 
// console.log(b());

/******************** */
function a(){
    console.log("a called");
}
//2.Function expression
var b =function(param1){  
    return function(){

    }

} 
console.log(b());
//Arrow Functions